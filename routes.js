const express = require('express');
const Track = require('./models/tracks');
const router = express.Roputer();

router.get('/tracks', async (req, res) => {
    const tracks = await Track.find();
    res.send(tracks);
});

router.post('/tracks', async (req, res) => {
    const track = new Track({
        title: req.body.title,
        artist: req.body.artist,
    });
    await track.save();
    res.send(track);
});

router.get('/tracks/:id', async (req, res) => {
    const track = await Post.findOne({ _id: req.params.id });
    res.send(track);
});

module.exports = router;