const url = require('url');
const myUrl = new URL('https://docs.google.com/spreadsheets/u/3/?pli=1&authuser=0');
const data = url.parse(myUrl);


console.log(data);