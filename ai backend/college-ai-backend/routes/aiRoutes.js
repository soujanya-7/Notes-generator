const express = require("express");
const multer = require("multer");
const {
  generateNotesFromText,
  generateNotesFromPDF,
  generateNotesFromYouTube,
} = require("../controllers/aiControllers");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/text-to-notes", generateNotesFromText);
router.post("/pdf-to-notes", upload.single("pdfFile"), generateNotesFromPDF);
router.post("/youtube-to-notes", generateNotesFromYouTube);

module.exports = router;
