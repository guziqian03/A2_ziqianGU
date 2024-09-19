const express = require('express');
const router = express.Router();
const db = require('../database');

// 获取所有分类
router.get('/', (req, res) => {
    db.query('SELECT * FROM CATEGORY', (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});

module.exports = router;