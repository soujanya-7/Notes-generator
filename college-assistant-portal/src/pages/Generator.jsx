import { useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';

// PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js`;

// Gemini API key
const GEMINI_API_KEY = 'AIzaSyDMWfcTJ-ZTT67CS5UZJaW_a-lYKRmOEjU'; // Replace this with your actual key

// Function to call Gemini API
async function generateAIResponse(promptText) {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: promptText }],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (data.candidates && data.candidates.length > 0) {
      return data.candidates[0].content.parts[0].text;
    } else {
      return '❌ Gemini did not return a valid response.';
    }
  } catch (error) {
    console.error('Gemini error:', error);
    return '❌ Error communicating with Gemini: ' + error.message;
  }
}

function Generator() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [file, setFile] = useState(null);
  const [youtubeLink, setYoutubeLink] = useState('');

  const handleGenerate = async () => {
    if (youtubeLink) {
      const aiResponse = await generateAIResponse(`Summarize or explain the video at: ${youtubeLink}`);
      setResponse(aiResponse);
    } else if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const pdfData = new Uint8Array(e.target.result);
        try {
          const pdf = await pdfjsLib.getDocument(pdfData).promise;
          let textContent = '';

          for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
            const page = await pdf.getPage(pageNum);
            const content = await page.getTextContent();
            content.items.forEach(item => {
              textContent += item.str + ' ';
            });
          }

          const aiResponse = await generateAIResponse(`Summarize the following content: ${textContent}`);
          setResponse(aiResponse);
        } catch (err) {
          setResponse('Error extracting text from PDF: ' + err.message);
        }
      };
      reader.readAsArrayBuffer(file);
    } else if (prompt) {
      const aiResponse = await generateAIResponse(prompt);
      setResponse(aiResponse);
    } else {
      setResponse('Please enter a prompt, upload a PDF file, or provide a YouTube link.');
    }
  };

  const handleFileUpload = (e) => setFile(e.target.files[0]);
  const handleYoutubeLinkChange = (e) => setYoutubeLink(e.target.value);

  return (
    <div className="page generator-section">
      <h2>AI Text Generator</h2>

      <div className="generator-inputs">
        <label htmlFor="youtube-link">Enter YouTube Link:</label>
        <input
          type="text"
          id="youtube-link"
          className="generator-input"
          value={youtubeLink}
          onChange={handleYoutubeLinkChange}
          placeholder="Paste link here"
        />
      </div>

      <div className="generator-inputs">
        <label htmlFor="upload-file">Choose File:</label>
        <input
          type="file"
          id="upload-file"
          className="generator-input"
          accept=".pdf"
          onChange={handleFileUpload}
        />
      </div>

      <div className="generator-inputs">
        <label htmlFor="prompt">Enter your request:</label>
        <textarea
          id="prompt"
          className="generator-input"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your request..."
          rows="4"
        />
      </div>

      <div className="generator-inputs">
        <button onClick={handleGenerate}>Generate</button>
      </div>

      <p className="response">{response}</p>
    </div>
  );
}

export default Generator;
