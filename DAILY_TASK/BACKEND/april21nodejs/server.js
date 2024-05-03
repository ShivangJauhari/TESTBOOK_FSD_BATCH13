const http = require('http');
const fs = require('fs');

function getFile(path, contentType, res) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            res.statusCode = 404; // Set the status code when an error occurs
            res.setHeader('Content-Type', 'text/html');
            res.end(`<h1>404:File Not Found</h1>`);
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', contentType);
            res.end(data);
        }
    });
}

const server = http.createServer((req, res) => {
    console.log('The request is made for', req.url);

    if (req.url === '/') {
        let path = './index.html';
        let contentType = 'text/html';
        getFile(path, contentType, res);
    } else if (req.url === '/style.css') {
        getFile('./style.css', 'text/css', res);
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end(`<div><h1>Oops! Page Not Found</h1></div> <a href="/">Go to Home</a>`);
    }
});

server.listen(3000, 'localhost', () => {
    console.log('Server is running on http://localhost:3000');
});