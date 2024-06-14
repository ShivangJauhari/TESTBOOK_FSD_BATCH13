const User = require('../models/userModels'); // Adjust the path as necessary
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.index = async (req, res) => {
    try {
        // Fetch the index page and render it
        res.render('index.ejs');
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
    };

exports.login = async (req, res) => {
    try {
        // Fetch the login page and render it
        res.render('login.ejs');

        // Extract email and password from request body
        const { email, password } = req.body;

        // Check if user exists with the given email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare provided password with stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id, email: user.email },
            process.env.JWT_SECRET, // Make sure to set this in your .env file
            { expiresIn: '1h' } // Token expires in 1 hour
        );

        // Send success response with token
        res.status(200).json({
            message: 'Login successful',
            token,
            redirectUrl: '/dashboard', // Indicate where the client should redirect to
        });
    
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.signUp = async (req, res) => {
    try {
        // Fetch the signup page and render it
        res.render('signup.ejs');
        // Extract user details from request body
        const { name, email, password, phoneNumber, typeOfUser } = req.body;

        // Check if user already exists with the given email
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }


        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create a new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            phoneNumber,
            typeOfUser,
        });

        // Save the user to the database
        await newUser.save();

        // Send success response
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};