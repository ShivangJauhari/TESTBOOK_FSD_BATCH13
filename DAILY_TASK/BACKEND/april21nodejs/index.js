const http = require('http');
const fs = require('fs');
// fs.readFile('example.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });

// write multiple files

const express=require('express');
const app=express();
const route=express.Router();
const reqFilter=require('./middlewarelogic');

route.use(reqFilter);

app.get('/',(req,res)=>{
    res.send('<h1>Hello from home page</h1>')
})

app.get('/about',(req,res)=>{
    res.send('<h1>Hello from about page</h1>')
})

route.get('/contact',(req,res)=>{
    res.send('<h1>Hello from contact page</h1>')
})
route.get('/contact/data',(req,res)=>{
    res.send('<h1>Hello from contact page</h1>')
})
app.get('/*',(req,res)=>{
    res.send('<h2>Error Page</h2>')
})

app.use('/',route);
app.listen(3700,()=>{
    console.log('server is listening at 3700');
})


const express=require('express');
const app=express();
const route=express.Router();
const reqFilter=require('./middlewarelogic');

route.use(reqFilter);

app.get('/',(req,res)=>{
    res.send('<h1>Hello from home page</h1>')
})

app.get('/about',(req,res)=>{
    res.send('<h1>Hello from about page</h1>')
})

route.get('/contact',(req,res)=>{
    res.send('<h1>Hello from contact page</h1>')
})
route.get('/contact/data',(req,res)=>{
    res.send('<h1>Hello from contact page</h1>')
})
app.get('/*',(req,res)=>{
    res.send('<h2>Error Page</h2>')
})

app.use('/',route);
app.listen(3700,()=>{
    console.log('server is listening at 3700');
})

