const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true,
    },
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room', // Ensure this matches the name of your room model, which might be 'rooms' based on your excerpt
        required: true,
    },
    start: {
        type: Date,
        required: true,
    },
    end: {
        type: Date,
        required: true,
    },
    guests: {
        adults: {
            type: Number,
            required: true,
            min: 1, // Assuming at least one adult must be present
        },
        children: {
            type: Number,
            default: 0, // Assuming children are optional
        },
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'cancelled', 'completed'], // Example booking statuses
        default: 'pending',
    },
    payment: {
        status: {
            type: String,
            enum: ['pending', 'paid', 'refunded', 'partial'],
            default: 'pending',
        },
        method: String, // e.g., "Credit Card", "PayPal", "Cash"
        amount: Number, // Total amount for the booking
    },
    specialRequests: String, // Any special requests from the guest
}, { timestamps: true }); // Add timestamps for creation and updates

module.exports = mongoose.model('Booking', bookingSchema);