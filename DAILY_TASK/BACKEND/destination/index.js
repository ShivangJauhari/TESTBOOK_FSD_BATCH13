const express = require('express');
const app = express();
const port = 3000;
// const cors = require('cors');
const path = require('path');
const fs = require('fs');
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

let novelData;
fs.readFile(path.join(__dirname, 'novelData.json'), 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    novelData = JSON.parse(data);
});

// app.use(cors());

app.get('/', (req, res) => {
  res.render('index', { novels: novelData });
});

app.get('/novels', (req, res) => {
    res.render('novels.ejs', { novels: novelData });
});

app.get('/novels/:isbn', (req, res) => {
    const { isbn } = req.params;
    const novel = novelData.find((novel) => novel.isbn === isbn);
    res.render('novelsDetails.ejs', { novel: novelData.find((novel) => novel.isbn === isbn) });
}); 

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});