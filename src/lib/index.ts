// place files you want to import through the `$lib` alias in this folder.

// src/lib/db.ts
import mysql from 'mysql2/promise';
import { config } from './db';

const pool = mysql.createPool(config.db);

export async function listTables() {
    const connection = await pool.getConnection();
    try {
        const [rows] = await connection.query('SHOW TABLES');
        return rows;
    } finally {
        connection.release();
    }
}

listTables().then(console.log).catch(console.error);