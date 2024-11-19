import mysql from 'mysql2/promise';
import { config } from './db';

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

// var status = await checkDbStatus();
// console.log("Db status: ", status);