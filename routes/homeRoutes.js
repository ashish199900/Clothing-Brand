const express = require('express');
const router = express.Router();
const path = require('path'); // Import the path module

// GET home page
router.get('/', (req, res) => {
    const externalHtmlPath = path.join(__dirname,'..', 'public', 'index.html');
    res.sendFile(externalHtmlPath);
});

module.exports = router;
