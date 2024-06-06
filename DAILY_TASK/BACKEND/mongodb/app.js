require('dotenv').config();

var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/dynamicchat");

const app = require('express')();

const http = require('http').Server(app);

const userRoute = require('../mongodb/routes/userRoutes.js');
const User = require('../mongodb/models/userModels.js');

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



});





http.listen(3000, function(){
    console.log(`listening on http://localhost:${3000}`);
});


