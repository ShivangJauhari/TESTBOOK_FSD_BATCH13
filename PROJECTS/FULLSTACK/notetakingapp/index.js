import express from 'express';
import path from 'path';
import { access, readFile, writeFile } from 'fs/promises';
import User from './models/user.js';
import Note from './models/note.js';
import cors from 'cors';
import multer from 'multer';



const app = express();
const port = 3000;

const upload = multer();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), 'components')));


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
          console.log('Login successful');
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
  const newUser = new User(username, email, password);
  const filePath = path.join(process.cwd(), 'user_filedata', `${username}_${email}.json`);

try {
          await access(filePath);
          console.log('User already exists');
          res.status(200).json({ success: false, message: 'User already exists' });
      } catch (err) {
            const userJson = JSON.stringify(newUser);
            try {
                await writeFile(filePath, userJson);
                console.log('Signup successful');
                res.status(200).json({ success: true, message: 'Signup successful' });
            } catch (err) {
                console.error('An error occurred', err);
                res.status(500).json({ success: false, message: 'An error occurred' });
            }
          }
});


// add a route to user_interface.html
app.get('/user_interface', (req, res) => {
  console.log('GET /user_interface');
  res.sendFile(path.join(process.cwd(), 'views', 'user_interface.html'));
});







app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});