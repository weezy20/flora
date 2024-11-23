import mysql from 'mysql2/promise';
export const config = {
    db: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'test',
        password: process.env.DB_PASSWORD || 'test',
        database: process.env.DB_NAME || 'test',
        connectTimeout: 60000,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    },
    listPerPage: 10,
};

export const pool = mysql.createPool(config.db);

export async function checkDbStatus() {
    try {
        const connection = await pool.getConnection();
        await connection.ping();
        connection.release();
        return { connected: true };
    } catch (error) {
        return { connected: false, error };
    }
}