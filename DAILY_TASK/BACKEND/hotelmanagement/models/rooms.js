


const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    roomNumber: {
        type: String,
        required: true,
        unique: true, // Assuming each room has a unique number or identifier
    },
    hotel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hotel', // Ensure this matches the name of your hotel model
        required: true,
    },
    type: {
        type: String,
        required: true,
        enum: ['Single', 'Double', 'Suite', 'Penthouse'], // Example room types
    },
    price: {
        type: Number,
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
    facilities: [String], // e.g., ["Ensuite bathroom", "Air conditioning"]
    amenities: [String], // e.g., ["Free WiFi", "TV", "Minibar"]
    images: [{
        url: String,
        description: String,
    }],
    availability: {
        type: Boolean,
        default: true,
    },
    description: {
        type: String,
        required: false, // Optional detailed description of the room
    },
    size: {
        type: Number, // Size in square meters or square feet
        required: false,
    },
    view: {
        type: String, // e.g., "Sea view", "Mountain view", "City view"
        required: false,
    },
    bookings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking', // Assuming you have a Booking model
    }],
}, { timestamps: true }); // Add timestamps for creation and updates

module.exports = mongoose.model('Room', roomSchema);