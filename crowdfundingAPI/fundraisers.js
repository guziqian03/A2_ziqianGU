const express = require('express');
const router = express.Router();
const db = require('../database');

// 获取所有活跃的筹款者及其分类
router.get('/', (req, res) => {
    db.query('SELECT f.*, c.name as category_name FROM FUNDRAISER f JOIN CATEGORY c ON f.category_id = c.id WHERE f.active = 1', (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});

// 获取特定筹款者的详细信息
router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM FUNDRAISER WHERE id = ?', [id], (error, results) => {
        if (error) throw error;
        res.json(results[0]);
    });
});

module.exports = router;