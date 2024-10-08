const express = require('express');

var dbcon = require("../database");

var connection = dbcon.getconnection();

connection.connect();

var router = express.Router();


router.get("/fundraisers", (req, res) => {
    connection.query("SELECT f.*, c.NAME AS category_name FROM Fundraiser f JOIN Category c ON f.category_id = c.CATEGORY_ID WHERE f.active = 1", (err, results) => {
        if (err) {
            console.error("Error while retrieving the data", err);
            res.status(500).send("Error while retrieving data");
        } else {
            res.json(results);
        }
    });
});



router.get("/categories", (req, res) => {
    connection.query("SELECT * FROM Category", (err, results) => {
        if (err) {
            console.error("Error retrieving categories", err);
            res.status(500).send("Error while retrieving categories");
        } else {
            res.json(results);
        }
    });
});


router.get("/fundraiser/:id", (req, res) => {
    const { id } = req.params;
    connection.query("SELECT f.*, c.NAME AS category_name FROM Fundraiser f JOIN Category c ON f.category_id = c.CATEGORY_ID where f.active=1 and  f.FUNDRAISER_ID = ?", [id], (err, results) => {
        if (err) {
            console.error("Error retrieving fundraiser", err);
            res.status(500).send("Error while retrieving fundraiser");
        } else {
            res.json(results[0]);
        }
    });
});

module.exports = router;

