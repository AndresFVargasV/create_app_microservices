const sql = require('mssql');

const config = {
    server: '',
    database: '',
    user: '',
    password: '',
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
