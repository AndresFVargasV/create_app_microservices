const sql = require('mssql');

const config = {
    server: 'localhost',
    database: 'crud_microservices',
    user: 'sa',
    password: '123456789',
    options: {
        trustServerCertificate: true
    }
};

const pool = new sql.ConnectionPool(config);

async function connectToDatabase() {
    try {
      const poolConnect = await pool.connect();
      console.log('Conexión exitosa a la base de datos');
    } catch (err) {
      console.error('Error al conectar a la base de datos:', err.message);
    }
}


module.exports = {pool, connectToDatabase, sql};
