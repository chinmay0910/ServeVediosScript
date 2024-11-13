const express = require('express');
const path = require('path');
const cors = require('cors'); 

const app = express();
const PORT = 8000; // You can change the port if needed

// Enable CORS for all routes
app.use(cors());

// Serve static files from the "videos" directory
app.use('/videos', express.static(path.join(__dirname, 'videos')));

// Optional: Endpoint to check server status
app.get('/', (req, res) => {
    res.send('Video server is running.');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
