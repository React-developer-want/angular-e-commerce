const express = require('express');
const app = express();
const cors = require('cors');
const { sellerSignup } = require('./controllers/seller-controller');

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/seller-auth', sellerSignup); 

module.exports = app;