// productModel.js
const mongoose = require('mongoose');

// Define the schema with the custom collection name
const productSchema = new mongoose.Schema({
        _id: String,
        name: String,
        price: Number,
        category: String,
        stock: Number
    }, { collection: 'ProductListCollection'}); // Specify the collection name here

// Create the model using a simpler model name
const Product = mongoose.model('Product', productSchema); // Use a simpler model name

module.exports = Product;