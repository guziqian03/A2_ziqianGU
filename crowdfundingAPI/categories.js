const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/', (req, res) => {
    db.query('SELECT * FROM CATEGORY', (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});

module.exports = router;
