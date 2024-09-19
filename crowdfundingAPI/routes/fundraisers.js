const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/', (req, res) => {
    db.query('SELECT * FROM FUNDRAISER WHERE ACTIVE = TRUE', (error, results) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.json(results);
    });
});

router.get('/categories', (req, res) => {
    db.query('SELECT * FROM CATEGORY', (error, results) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.json(results);
    });
});

module.exports = router;