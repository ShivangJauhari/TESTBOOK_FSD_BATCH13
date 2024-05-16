// To modify your `index.js` file to allow a logged-in user to modify their own `filename.json` file, you need to add session handling. Here's how you can do this using the `express-session` package:

// ```javascript
import express from 'express';
import path from 'path';
import { access, readFile, writeFile } from 'fs/promises';
import User from './models/user.js';
import Note from './models/note.js';
import cors from 'cors';
import multer from 'multer';
import session from 'express-session';

const app = express();
const port = 3000;

const upload = multer();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), 'components')));


app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

app.get('/', (req, res) => {
  console.log('GET /');
  res.sendFile(path.join(process.cwd(), 'views', 'index.html'));
});

app.get('/home', (req, res) => {
  console.log('GET /home');
  res.sendFile(path.join(process.cwd(), 'views', 'index.html'));
});

app.get('/login',upload.none(), (req, res) => {
  console.log('GET /login');
  res.sendFile(path.join(process.cwd(), 'views', 'login.html'));
});

app.get('/signup', upload.none(),(req, res) => {
  console.log('GET /signup');
  res.sendFile(path.join(process.cwd(), 'views', 'signup.html'));
});

// Login route
app.post('/login', async (req, res) => {
  console.log('POST /login');
  const { email, username, password } = req.body;
  const filePath = path.join(process.cwd(), 'user_filedata', `${username}_${email}.json`);

  try {
    await access(filePath);
    const data = await readFile(filePath, 'utf8');
    const fileData = JSON.parse(data);
    if (fileData.password === password) {
      req.session.user = username;
      req.session.email = email;
      console.log('Login successful');
      // set the session storage to the username and email
      // replace 'usernameValue' and 'emailValue' with the actual username and email
     

      // req.session.user = username;

       res.status(200).json({success:true, message:'Login successful'});

    } else {
      console.log('Invalid login credentials');
      res.status(401).json({success:false, message:'Invalid login credentials'});
    }
  } catch (err) {
    console.log('Invalid login credentials');
    res.status(401).json({success:false, message: 'Invalid login credentials'});
  }
});

// Signup route
app.post('/signup', async (req, res) => {
  console.log('POST /signup');
  const { username, email, password } = req.body;
  // Check if the user already exists
  const filePath = path.join(process.cwd(), 'user_filedata', `${username}_${email}.json`);
  try {
    // check if the file exists the console.log the message 'User already exists' and return a status code of 409
    await access(filePath);
    console.log('User already exists');
    res.status(409).json({success:false, message:'User already exists'});    
  } catch (err) {
    // If the file doesn't exist, create a new user and write their data to the file
    const user = new User(username, email, password);
    user.saveToFile((err, data) => {
      if (err) {
        console.error('Error writing user data to file:', err);
        res.status(500).json({success:false, message:'Internal server error'});
      } else {
        console.log('User created successfully');
        res.status(201).json({success:true, message:'User created successfully'});
      }
    });
  }
});

    // add a route to user_interface.html
    app.get('/user_interface', (req, res) => {
      if (req.session.user) {
        console.log('GET /user_interface');
        res.sendFile(path.join(process.cwd(), 'views', 'user_interface.html'));
      } else {
        console.log('User not logged in');
        res.status(401).json({success:false, message:'User not logged in'});
      }
    });


    app.get('/user_interface/:username_:email.json', (req, res) => {
    console.log('GET /user_filedata');
    if (!req.session.user) {
        console.log('User not logged in');
        return res.status(401).json({success:false, message:'User not logged in'});
    }
    const username = decodeURIComponent(req.params.username_);
    const email = decodeURIComponent(req.params.email);
    const filePath = path.join(process.cwd(), 'user_filedata', `${username}_${email}.json`);
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).json({success:false, message:'Internal server error'});
        } else {
            res.json(JSON.parse(data));
        }
    });
});

    // add a route to logout 
    app.post('/logout', (req, res) => {
      console.log('POST /logout');
      req.session.destroy();
      res.redirect('/login');
    });

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


