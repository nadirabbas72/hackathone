const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectdb =require('./config/db');
const app = express();
app.use(cors());
app.use(express.json()); // For parsing JSON bodies

connectdb();

// Event schema for MongoDB
const eventSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Date,
    location: String,
    category: String,
    visibility: { type: String, enum: ['public', 'private'], default: 'public' }
});

// Event model
const Event = mongoose.model('Event', eventSchema);

// API route to fetch all events
app.get('/events', async (req, res) => {
    try {
        const events = await Event.find({});
        res.json(events);
    } catch (err) {
        res.status(500).send('Error fetching events');
    }
});

// API route to create a new event
app.post('/events', async (req, res) => {
    try {
        const event = new Event(req.body);
        await event.save();
        res.status(201).json(event);
    } catch (err) {
        res.status(500).send('Error creating event');
    }
});

// Set up the server to listen on port 5000
const port = 8080;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
