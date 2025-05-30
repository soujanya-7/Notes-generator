const fs = require("fs");
const pdfParse = require("pdf-parse");
const ytdl = require("ytdl-core");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const Note = require("../models/Note");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const getGeminiNotes = async (prompt) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
};

// 📄 Text or Assignment Question → Notes
exports.generateNotesFromText = async (req, res) => {
  const { inputText, userId } = req.body;
  try {
    const output = await getGeminiNotes(
      `Convert the following into structured notes:\n${inputText}`
    );

    const note = await Note.create({ userId, input: inputText, output });
    res.json({ success: true, output });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 📚 PDF → Notes
exports.generateNotesFromPDF = async (req, res) => {
  const { userId } = req.body;
  const file = req.file;
  try {
    const dataBuffer = fs.readFileSync(file.path);
    const pdfData = await pdfParse(dataBuffer);
    const output = await getGeminiNotes(
      `Convert this PDF content into detailed notes:\n${pdfData.text}`
    );

    const note = await Note.create({ userId, input: pdfData.text, output });
    res.json({ success: true, output });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 📹 YouTube → Notes
exports.generateNotesFromYouTube = async (req, res) => {
  const { youtubeUrl, userId } = req.body;
  try {
    const info = await ytdl.getInfo(youtubeUrl);
    const transcript = info.videoDetails.description || info.videoDetails.title;

    const output = await getGeminiNotes(
      `Summarize this YouTube content into clear notes:\n${transcript}`
    );

    const note = await Note.create({ userId, input: transcript, output });
    res.json({ success: true, output });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
