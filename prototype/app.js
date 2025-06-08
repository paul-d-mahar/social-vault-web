'use strict';
const https = require('https');
const fs = require('fs'); // For reading SSL/TLS certificates
const http = require('http'); // For handling HTTP requests

// --- HTTPS server setup ---
const httpsOptions = {
    key: fs.readFileSync('localhost-key.pem'),  // Replace with your private key
    cert: fs.readFileSync('localhost.pem') // Replace with your certificate
};

const httpsServer = https.createServer(httpsOptions, (req, res) => {
    // --- Handling HTTP requests ---
    // always return index.html for the root 
    // Serve index.html
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('./index.html', (err, data) => {
        if (err) {
            console.error(err);
            res.writeHead(500);
            res.end("Server Error");
        } else {
            res.end(data);
        }
    });
});

// --- Start the HTTPS server ---
httpsServer.listen(443, () => {
    console.log('HTTPS server listening on port 443');
});

// --- Optional:  Redirect HTTP requests to HTTPS ---
// If you want to redirect all HTTP requests to HTTPS,
// you can use a simple HTTP server:
const httpServer = http.createServer((req, res) => {
    res.writeHead(301, {
        'Location': `https://${req.headers.host}${req.url}`
    });
    res.end();
});

httpServer.listen(80, () => {
    console.log('HTTP server listening on port 80.  Redirecting to HTTPS.');
});