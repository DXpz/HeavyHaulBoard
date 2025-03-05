require('dotenv').config();
const { pool, poolConnection } = require('./config/dbConfig');

async function testConnection() {
    try {
        // Espera a que el pool se conecte
        const connectedPool = await poolConnection;

        console.log('✅ Conectado a SQL Server');

        // Ejecuta una consulta
        const request = connectedPool.request();
        const result = await request.query(`
            SELECT 
                @@SERVERNAME AS ServerName,
                DB_NAME() AS DatabaseName
        `);

        console.log('\n📊 Resultado:');
        console.log(result.recordset[0]);

    } catch (err) {
        console.error('❌ Error:', err);
    } finally {
        // Cierra la conexión
        await pool.close();
    }
}

testConnection();