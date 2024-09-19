const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'yourpassword',
    database: 'crowdfunding_db'
});

module.exports = pool;