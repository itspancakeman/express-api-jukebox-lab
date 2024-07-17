// ==== GLOBALS ===== 
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const router = express.Router();
const session = require('express-session');
const PORT = process.env.PORT || 3000;
const methodOverride = require('method-override');
const axios = require('axios');
const cors = require('cors');
const { Track } = require('./models');

// ===== MIDDLEWARE ==== 
app.set('view engine', 'ejs');
app.use(express.json());
app.use(methodOverride('_method'));
app.use(cors())

router.get('/tracks', async (req, res) => {
    try {
        const tracks = await Track.find();
        res.json(tracks);
    } catch (error) {
        res.status(500)
            .json({ message: 'Inernal server error' });
    }
});





// ===== SERVER LISTENER ===== 
const server = app.listen(PORT, () => {
    console.log('listening at PORT ', PORT);
});

module.exports = server, router;