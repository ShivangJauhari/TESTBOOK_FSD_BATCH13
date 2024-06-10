
const mongoose =   require('mongoose');


const chatSchema = new mongoose.Schema({
    sender_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    receiver_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    message: {
        type: String,
        required: true
    },
},
    { timeStamps: true }
);

module.exports = mongoose.model('Chat', chatSchema);