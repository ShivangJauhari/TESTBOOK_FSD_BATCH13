require('dotenv').config();

var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/dynamicchat");

const app = require('express')();

const http = require('http').Server(app);

const userRoute = require('../mongodb/routes/userRoutes.js');
const User = require('../mongodb/models/userModels.js');
const Chat = require('../mongodb/models/chatModels.js');

app.use('/', userRoute);

const io = require('socket.io')(http);

const usp = io.of('/user-namespace');

usp.on('connection', async function(socket){
    console.log('a user connected');
    
    const userId = socket.handshake.auth.token;

    console.log(userId);

    await User.findByIdAndUpdate({_id: userId}, {$set: {isOnline: true}});

    //user login for all user online status
    await socket.broadcast.emit('getOnlineUsers', { user_id: userId});

    socket.on('disconnect', async function(){
        console.log('user disconnected');
        const userId = socket.handshake.auth.token;
        await User.findByIdAndUpdate({_id: userId}, {$set: {isOnline: false}});
        // req.session.destroy();

        //user logout for all user offline status
        await socket.broadcast.emit('getOfflineUsers', { user_id: userId});
        
              

    });

    // chat message

    socket.on('newChat', async function(data){
        socket.broadcast.emit('loadNewChat', data);
    });

    //load chat history
    socket.on('existsChat', async function(data){
        const chat = await Chat.find({$or: [{sender_id: data.sender_id, receiver_id: data.receiver_id}, {sender_id: data.receiver_id, receiver_id: data.sender_id}]});
        socket.emit('loadExistsChat', { chats : chat});
    });




// delete chat
socket.on('deleteChat', async function(data){
    await Chat.findByIdAndDelete({_id: data.chat_id});
    socket.broadcast.emit('chatMessageDeleted', data.chat_id);
});

// update chat
socket.on('updateChat', async function(data){
    const chat = await Chat.findByIdAndUpdate({_id: data.chat_id}, {$set: {message: data.message}}, {new: true});
    socket.broadcast.emit('chatMessageUpdated', chat);
});

});







http.listen(3000, function(){
    console.log(`listening on http://localhost:${3000}`);
});


