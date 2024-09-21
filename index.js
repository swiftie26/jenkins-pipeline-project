const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

// Serve static files like profile.html and Ayesha's resume
app.use(express.static(path.join(__dirname)));

// Default route to serve the profile.html page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'profile.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${port}/`);
});
