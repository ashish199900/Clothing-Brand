Project Components

1. MongoDB and Mongoose
    Schema Fields:
        _id: String (Unique ID for the product)
        name: String (Name of the product)
        price: Number (Price of the product)
        category: String (Category of the product)
        stock: Number (Stock quantity of the product)
2. Backend (Node.js and Express.js)
    Dependencies:
    mongoose: For MongoDB object modeling.
    express: For handling HTTP requests.
    API Endpoints:
        GET /api/searchproduct: Searches products based on the category provided by the client.
3. Frontend
    HTML:
    jQuery:
    Bootstrap:
    Utilizes Bootstrap classes for styling and layout, including text alignment and centering.
4. Setup
    *Modify for your MongoDB 
        const connectionString = 'mongodb://localhost:27017/mydatabase'; // Replace with your database connection string

    *Make Collection of products
        Sample data
        [
            {
                "_id": "prod001",
                "name": "Wireless Mouse",
                "price": 25.99,
                "category": "Electronics",
                "stock": 150
            },
            {
                "_id": "prod002",
                "name": "Bluetooth Speaker",
                "price": 45.50,
                "category": "Electronics",
                "stock": 75
            }
        ]

WORKING 
    Search the categories in Search Bar.
        Test with:-
            Jeans,T-Shirt,Jacket,Caot
CREDITS & REFERENCES

https://getbootstrap.com/

Fonts
Google fonts
https://fonts.google.com/

Icons
https://icomoon.io/

JQuery Plugins

Swiper Slider - https://swiperjs.com/
Slick Slider - https://kenwheeler.github.io/slick/




