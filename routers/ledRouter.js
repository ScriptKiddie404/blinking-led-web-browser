const express = require('express');
const Led = require('../models/Led');
const router = new express.Router();

router.get('/registros', async (req, res) => {
    try {
        const registros = await Led.find({});
        res.status(200).send(registros);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

router.get('/last-record', async (req, res) => {
    try {
        const record = await Led.find({}).sort({ updatedAt: -1 }).limit(1);
        res.status(200).send(record);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

module.exports = router;