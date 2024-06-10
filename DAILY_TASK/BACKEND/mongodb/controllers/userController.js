const User = require('../models/userModels');
const bcrypt = require('bcrypt');
const Chat = require('../models/chatModels');



const registerLoad = async(req, res) => {
    try {
        res.render('register');
    } catch (error) {
        console.log(error.message);
    }

   
}

const register = async(req, res) => {
    try {
        const passwordHash = await bcrypt.hash(req.body.password, 10);

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            image: 'images/' + req.file.filename,
            password: passwordHash,
        });

        await user.save();

        res.render('register', { message: 'Registered Successfully'});

    } catch (error) {
        console.log(error.message);
    }
}

const loadLogin =  async (req, res) =>{
    try{

        res.render('login');

    }catch (error){
        console.log(error.message);
    }

}


const login =  async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const userData = await User.findOne({email: email});

        if(userData) {
            const passwordMatch = await bcrypt.compare(password, userData.password);
            if(passwordMatch) {
                req.session.user = userData;
                res.redirect('/dashboard');
            } else {
                res.render('login', {message: 'Wrong Password'})
            }
        } else {
            res.render('login', {message: 'Invalid credentials'})
        }
    } catch (error) {
        console.log(error.message);
    }
}


const logout =  async (req, res) =>{
    try{
        req.session.destroy();
        res.redirect('/');
        
    }catch (error){
        console.log(error.message);
    }
    
}

const loadDashboard =  async (req, res) =>{
    try{

        var users = await User.find({_id: {$nin: [req.session.user._id]}});
        res.render('dashboard', { user: req.session.user, users: users})
                
    }catch (error){
        console.log(error.message);
    }

}

const saveChat =  async (req, res) =>{
    try{
        const chat = new Chat({
            sender_id : req.body.sender,
            receiver_id : req.body.receiver,
            message : req.body.message, 
        });

        var newChat = await chat.save();
        res.status(200).json({success: true,message: 'Chat saved successfully', data: newChat});

        
    }catch (error){
        res.status(400).sender({ success: false, message: error.message});
    }
}


const deleteChat =  async (req, res) =>{
    try{
        const chat = await Chat.findByIdAndDelete({_id: req.body.chat_id});
        res.status(200).json({success: true,message: 'Chat deleted successfully', data: chat});
    }catch (error){
        res.status(400).sender({ success: false, message: error.message});
    }
}

const updateChat =  async (req, res) =>{
    try{
        const chat = await Chat
        .findByIdAndUpdate({_id: req.body.chat_id}, {$set: {message: req.body.message}}, {new: true});
        res.status(200).json({success: true,message: 'Chat updated successfully', data: chat});
    }
    catch (error){
        res.status(400).sender({ success: false, message: error.message});
    }
}



module.exports = {
    registerLoad,
    register,
    loadLogin,
    login,
    logout,
    loadDashboard,
    saveChat,
    deleteChat,
    updateChat,
}