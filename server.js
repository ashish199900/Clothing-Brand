require('dotenv').config(); // For environment variables
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path'); // Import the path module

const searchProductsRoutes = require('./routes/searchProducts');
const homeRoutes = require('./routes/homeRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

const uri = "mongodb+srv://ashishkumar12dd:URz0Q58xPZVQDgaG@productdetails.pgqve.mongodb.net/ProductList";
// MongoDB connection
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB',  mongoose.connection.name))
    .catch(err => console.error('Could not connect to MongoDB...', err));

// Routes
app.use('/api/searchProducts', searchProductsRoutes);
app.use('/', homeRoutes); // Use the home routes


// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});