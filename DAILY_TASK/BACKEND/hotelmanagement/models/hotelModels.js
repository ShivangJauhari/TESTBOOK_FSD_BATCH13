const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    // Basic Information
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    starRating: {
        type: Number,
        required: true,
        min: 1,
        max: 5, // Assuming a 1-5 star rating system
    },

    // Location Information
    address: {
        street: String,
        city: String,
        state: String,
        country: String,
        zipCode: String,
    },

    // Amenities and Services
    amenities: [String], // e.g., ["Free WiFi", "Parking", "Pool", "Gym"]
    services: [String], // e.g., ["Room service", "Laundry", "Spa"]

    // Room Information
    rooms: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room', // Assuming you have a Room model
    }],

    // Contact Information
    contact: {
        phone: String,
        email: String,
        website: String,
    },

    // Photos
    photos: [String], // URLs to photos

    // Reviews
    reviews: [{
        reviewer: String,
        rating: {
            type: Number,
            min: 1,
            max: 5,
        },
        comment: String,
        date: {
            type: Date,
            default: Date.now,
        },
    }],

    // Booking Information
    // This can include details about bookings if you want to track them at the hotel level

}, { timestamps: true }); // Add timestamps for creation and updates

// Create a geospatial index on the location field for efficient querying by location
hotelSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Hotel', hotelSchema);