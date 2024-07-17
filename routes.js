const express = require('express');
const Track = require('./models/tracks');
const router = express.Roputer();

router.get('/tracks', async (req, res) => {
    const tracks = await Track.find();
    res.send(tracks);
});



module.exports = router;