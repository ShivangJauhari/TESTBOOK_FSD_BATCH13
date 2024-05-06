const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.send('Hello about!');
});

app.get('/contact', (req, res) => {
    res.send('Hello contact!');
});

app.get('*', (req, res) => {
    res.send('404 Page not found');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
