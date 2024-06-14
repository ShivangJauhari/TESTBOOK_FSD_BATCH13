require('dotenv').config();

const mongoose =  require('mongoose');

// connect the mongoose
 
mongoose.connect("mongodb://localhost:27017/hotlemanagement");

const express = require('express');
const app = express();

// set up the cors
const cors = require('cors');
app.use(cors());

app.use(express.json());

const userRouter = require('./routes/userRoutes');



// user routes

app.use('/', userRouter);


const http = require('http').Server(app);

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});






