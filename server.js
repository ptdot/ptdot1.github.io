const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// API để gửi danh sách các file nhạc
app.get('/tracks', (req, res) => {
    const musicDir = path.join(__dirname, 'public', 'music');
    fs.readdir(musicDir, (err, files) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading directory' });
        }
        // Lọc ra các file có đuôi .mp3
        const mp3Files = files.filter(file => path.extname(file) === '.mp3');
        res.json(mp3Files);
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
