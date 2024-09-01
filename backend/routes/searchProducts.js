const express = require('express');
const router = express.Router();
const Product = require('../models/productSearch');
const mongoose = require('mongoose');

// GET all products
router.get('/', async (req, res) => {
    const category = req.query.search;
    console.log(category);

    // Build the MongoDB query object
    let searchQuery = {};

    if (category) {
        searchQuery.category = category;
    }

    console.log(searchQuery);
    try {
        const products = await Product.find(searchQuery);
        console.log(Product);
        console.log(products);
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
