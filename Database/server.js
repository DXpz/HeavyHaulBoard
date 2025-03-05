const express = require('express');
const { poolConnect } = require('./config/dbConfig');
const app = express();

// Conectar a la BD
poolConnect
    .then(() => console.log('Conexión exitosa a SQL Server'))
    .catch(err => console.error('Error de conexión:', err));

// Middlewares
app.use(express.json());

// Rutas
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/shipments', require('./routes/shipments.routes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));