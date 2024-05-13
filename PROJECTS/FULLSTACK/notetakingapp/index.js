const fs = require('fs');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'components')));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log('GET /');
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/home', (req, res) => {
  console.log('GET /home');
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// create the route to get login.html page from the views folder
app.get('/login', (req, res) => {
  console.log('GET /login');
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

// create the route to get signup.html page from the views folder
app.get('/signup', (req, res) => {
  console.log('GET /signup');
  res.sendFile(path.join(__dirname, 'views', 'signup.html'));
});

app.get('/user_interface', (req, res) => {
  console.log('GET /user_interface');
  res.sendFile(path.join(__dirname, 'views', 'user_interface.html'));
});

// create a post route to handle the login form submission
app.post('/login', async (req, res) => {
  console.log('POST /login');
  const { email, username, password } = req.body;

  // create the file path
  const filePath = path.join(__dirname, 'user_filedata', `${username}_${email}.json`);

  try {
    await fs.access(filePath);
    const data = await fs.readFile(filePath, 'utf8');
    const fileData = JSON.parse(data);
    if (fileData.password === password) {
      console.log('Login successful');
      res.status(200).send("Login successful");
    } else {
      console.log('Invalid login credentials');
      res.status(400).send("Invalid login credentials");
    }
  } catch (err) {
    console.log('Invalid login credentials');
    res.status(400).send("Invalid login credentials");
  }
});

// create a post route to handle the signup form submission
app.post('/signup', async (req, res) => {
  console.log('POST /signup');
  const { username, email, password } = req.body;

  // Create user object from the models folder and pass the username, email and password as arguments to that class
  const User = require('./models/user.js');
  const newUser = new User(username, email, password);
  
  //check if the user already exists
  const filePath = path.join(__dirname, 'user_filedata', `${username}_${email}.json`);
  try {
    await fs.access(filePath);
    console.log('User already exists');
    res.status(400).send("User already exists");
  } catch (err) {
    // User does not exist, proceed with signup
    // Convert user object to JSON
    const userJson = JSON.stringify(newUser);

    // Write user data to file
    try {
      await fs.writeFile(filePath, userJson);
      console.log('Signup successful');
      res.status(200).send('Signup successful');
    } catch (err) {
      console.error('An error occurred', err);
      res.status(500).send('An error occurred');
    }
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});