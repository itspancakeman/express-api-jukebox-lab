const express = require('express');
const Track = require('./models/tracks');
const router = express.Roputer();

router.get('/tracks', async (req, res) => {
    const tracks = await Track.find();
    res.status(200);
    res.send('OK', tracks);
});

router.post('/tracks', async (req, res) => {
    const track = new Track({
        title: req.body.title,
        artist: req.body.artist,
    });
    await track.save();
    res.status(201);
    res.send('created: ', track);
});

router.get('/tracks/:id', async (req, res) => {
    try {
    const track = await Post.findOne({ _id: req.params.id });
    res.send(track);
    } catch {
        res.status(500);
        res.send({ error: "Internal server error" });
    }
});

router.patch('/tracks/:id', async (req, res) => {
    try {
        const track = await Track.findOne({ _id: req.params.id })

        if (req.body.title) {
            track.title = req.body.title
        }

        if (req.body.artist) {
            track.artist = req.body.artist
        }

        await track.save();
        res.send(track);
    } catch {
        res.status(500);
        res.send({ error: 'Internal server error' });
    }
});

module.exports = router;