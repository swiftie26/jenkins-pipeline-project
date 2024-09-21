const request = require('supertest');
const express = require('express');
const path = require('path');

const app = express();

// Serve static files (like profile.html)
app.use(express.static(path.join(__dirname)));

// Serve the profile.html file at the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'profile.html'));
});

describe('GET /', () => {
  it('should return the profile.html page', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('<title>Ayesha Rana - Profile</title>'); // Check if the profile page is served
  });
});
