/**
 * Imports the built-in HTTP module to create an HTTP server and handle HTTP requests and responses.
 * This module provides functionality for creating web servers and making HTTP requests.
 */
// 
const http = require('http');


/** * Creates an HTTP server that listens for incoming requests and sends a simple "Hello, World!" response.
 */
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
});


/** * Defines the port number on which the server will listen for incoming requests.
 * It uses the PORT environment variable if available; otherwise, it defaults to port 8080.
 */
const port = process.env.PORT || 8080;

/** * Starts the server and listens on the specified port.
 * Once the server is running, it logs a message indicating the port number.
 */
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
