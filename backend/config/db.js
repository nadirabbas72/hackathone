// Import mongoose
const mongoose = require('mongoose');
const connectdb = () => {
// MongoDB connection string
mongoose.connect('mongodb+srv://nadirabbas72:47hNjIk2TxDtoQzj@cluster0.mongodb.net/eventapp', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.log('Error connecting to MongoDB:', err));

}
module.exports = connectdb;