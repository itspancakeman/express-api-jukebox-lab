// ==== GLOBALS ===== 
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const session = require('express-session');
const PORT = process.env.PORT || 3000;
const methodOverride = require('method-override');
const axios = require('axios');
const cors = require('cors');
const { default: mongoose } = require('mongoose');

// ===== MIDDLEWARE ==== 
app.set('view engine', 'ejs');
app.use(express.json());
app.use(methodOverride('_method'));
app.use(cors());






// ===== SERVER LISTENER ===== 
const server = app.listen(PORT, () => {
    console.log('listening at PORT ', PORT);
});

module.exports = server;