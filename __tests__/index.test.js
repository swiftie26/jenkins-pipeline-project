const request = require('supertest');
const http = require('http');

// Use '0.0.0.0' to listen on all interfaces
const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, Jenkins Pipeline!\n');
});

describe('GET /', () => {
  it('should return Hello, Jenkins Pipeline!', async () => {
    server.listen(port, hostname);
    const res = await request(`http://127.0.0.1:${port}`).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello, Jenkins Pipeline!\n');
    server.close();
  });
});
