// create the user routes

const express = require('express');
const router = express();

const session = require('express-session');
const { SESSION_SECRET } = process.env;
router.use(session({ secret: SESSION_SECRET }));

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
        cb(null, path.join(__dirname, './public/uploads'));
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    },
});

const upload = multer({ storage });

const userController = require('../controller/userController');

// Middleware to check if the user is logged in
function checkUserSession(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/login'); // Redirect to login if not authenticated
    }
}

// Apply the session check middleware only to routes that require authentication
// Example: router.get('/profile', checkUserSession, userController.profile);

// Public routes
router.get('/', userController.index);
router.get('/login', userController.login);
router.get('/signup', userController.signUp);

// Example of a protected route
// router.get('/dashboard', checkUserSession, userController.dashboard);

// for all other routes, redirect to login
router.get('*', (req, res) => {
    res.redirect('/');
});

module.exports = router;