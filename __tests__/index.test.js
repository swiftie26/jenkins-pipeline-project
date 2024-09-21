const request = require('supertest');
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, Jenkins Pipeline!\n');
});

describe('GET /', () => {
  it('should return Hello, Jenkins Pipeline!', async () => {
    server.listen(port, hostname);
    const res = await request(`http://${hostname}:${port}`).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello, Jenkins Pipeline!\n');
    server.close();
  });
});
