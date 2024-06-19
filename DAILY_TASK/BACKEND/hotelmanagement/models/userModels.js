const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    // Personal Information
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensure email addresses are unique
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: false, // Depending on whether you want to make phone number mandatory
    },

    image: {
        type: String,
        required: false,
    },

    // Booking Information
    roomsBooked: [{
        roomId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Room', // Assuming you have a Room model
            required: true,
        },
        bookingDate: {
            type: Date,
            required: true,
        },
        checkInDate: {
            type: Date,
            required: true,
        },
        checkOutDate: {
            type: Date,
            required: true,
        },
        status: {
            type: String,
            enum: ['booked', 'checked-in', 'checked-out', 'cancelled'],
            default: 'booked',
        },
        // Add more booking related fields as needed
    }],

    // User Type
    typeOfUser: {
        type: String,
        enum: ['guest', 'admin', 'staff'],
        required: true,
    },

    // Timestamps
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);