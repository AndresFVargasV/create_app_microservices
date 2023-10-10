const sql = require('mssql');

const config = {
    server: 'adminacor.database.windows.net',
    database: 'crud_microservices',
    user: 'adminacor',
    password: '12345',
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
