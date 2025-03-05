const { pool } = require('../config/dbConfig');

class User {
    static async findByEmail(email) {
        const result = await pool.request()
            .input('email', sql.NVarChar, email)
            .query('SELECT * FROM Users WHERE Email = @email');

        return result.recordset[0];
    }
}

module.exports = User;