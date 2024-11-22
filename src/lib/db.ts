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

export async function checkDbStatus(): Promise<boolean> {
    console.log("Database configuration ", config.db)
    try {
        const connection = await pool.getConnection();
        console.log('Database connection successful');
    } catch (error) {
        console.error('Database connection failed:', error);
        return false;
    }
    return true;
}