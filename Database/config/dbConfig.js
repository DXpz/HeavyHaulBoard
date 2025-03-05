const sql = require('mssql');
require('dotenv').config();

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};

// Crea una instancia del pool
const pool = new sql.ConnectionPool(config);

// Conecta el pool y exporta la conexión
const poolConnection = pool.connect()
    .then(() => {
        console.log('Pool conectado');
        return pool;
    })
    .catch(err => {
        console.error('Error al conectar el pool:', err);
    });

module.exports = {
    sql,
    pool,
    poolConnection
};