const mongoose = require('mongoose');

// Define the event schema
const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    }
});

// Create the Event model
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
