const sql = require('mssql');

const config = {
    server: '',
    database: '',
    user: '',
    password: '',
    options: {
        encrypt: true // Use this if you're on Windows Azure
    }
};

const pool = new sql.ConnectionPool(config);

pool.connect(err => {
    if (err) {
        console.error('Error connecting to database:', err);
    } else {
        console.log('Connected to database');
    }
});

module.exports = pool;
