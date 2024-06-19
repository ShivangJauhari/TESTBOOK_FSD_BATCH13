// create the user routes

const express = require('express');
const router = express();

const session = require('express-session');
const { SESSION_SECRET } = process.env;
router.use(session({ secret: SESSION_SECRET,
    resave: false, // Do not save session if unmodified
    saveUninitialized: false, // Do not create session until something stored Other options...

 }));

// Using Express built-in middleware for body parsing
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.set('view engine', 'ejs');
router.set('views', './views');

router.use(express.static('./public'));

const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/uploads'));
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    },
});

const upload = multer({ storage });

const userController = require('../controller/userController');





// Public routes
router.get('/', userController.index);
router.get('/login', userController.login);
router.get('/signup', userController.signUp);
router.post('/signup', upload.single('image') ,userController.createUser);
router.post('/login', userController.authenticateUser);

// for all other routes, redirect to login
router.get('*', (req, res) => {
    res.redirect('/');
});

// Middleware to check if the user is logged in
function checkUserSession(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/login'); // Redirect to login if not authenticated
    }
}

router.use(checkUserSession);

router.get('/logout', userController.logout);
router.get('/dashboard', userController.dashboard);





module.exports = router;