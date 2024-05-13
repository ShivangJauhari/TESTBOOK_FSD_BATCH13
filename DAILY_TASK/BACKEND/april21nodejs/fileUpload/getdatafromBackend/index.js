// Init the express app
const express = require('express');
const app = express();

// Init the port
const port = 3500;

// Init the body parser
app.use(express.json());

// Init the path
const path = require('path');

// Init the file system
const fs = require('fs');

// Init the multer
const multer = require('multer');
const upload = multer();

// Init cors
const cors = require('cors');

app.use(cors());


// get the create request from the index.html
app.get('/', (req, res) => {
  console.log('GET /');
  res.sendFile(path.join(__dirname, 'index.html'));
});

// if there is fetch request from the index.html /books the return the data.json
app.get('/books', (req, res) => {
  console.log('GET /books');
  res.sendFile(path.join(__dirname, 'data.json'));
});

// if there is fetch request from the index.html /books/:title the return the book from the data.json file
app.get('/books/:title', (req, res) => {
    const title = req.params.title;
    let data;
    try {
        data = JSON.parse(fs.readFileSync('data.json'));
    } catch (err) {
        data = [];
    }
    const books = data.filter(book => book.title === title);
    console.log(typeof books);
    if (books.length > 0) {
        res.json(books);
    } else {
        res.status(404).send('No books found with the given title');
    }
});

// if there is create request from the index.html /books append the book to the data.json file
app.post('/books', upload.none(), (req, res) => {
  console.log('POST /books');
  const book = req.body;
  console.log(book);
  let data;
  try {
    data = JSON.parse(fs.readFileSync('data.json'));
  } catch (err) {
    data = [];
  }
  console.log(data);
  if (Array.isArray(data)) {
    data.push(book);
  } else {
    data = [book];
  }
  console.log('data.json');
  fs.writeFileSync('data.json', JSON.stringify(data));
  res.send('200');
  console.log('data.json');
});

// if there is delete request from the index.html /books/:title delete the book from the data.json file
app.delete('/books/:title', (req, res) => {
  console.log('DELETE /books/:title');
  const title = req.params.title;
  let data;
  try {
    data = JSON.parse(fs.readFileSync('data.json'));
  } catch (err) {
    data = [];
  }
  const newData = data.filter((book) => book.title !== title);
  fs.writeFileSync('data.json', JSON.stringify(newData));
  res.send('200');
});


// if there is update request from the index.html /books/:title update the book from the data.json file
app.put('/books/:title', upload.none(), (req, res) => {
  console.log('PUT /books/:title');
  const title = req.params.title;
  const update = req.body;
  let data;
  try {
    data = JSON.parse(fs.readFileSync('data.json'));
  } catch (err) {
    data = [];
  }
  const newData = data.map((b) => {
    if (b.title === title) {
      return { ...b, ...update };
    }
    return b;
  });
  fs.writeFileSync('data.json', JSON.stringify(newData));
  res.send('200');
});





















// create a server to handle the requests
app.listen(3500, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
