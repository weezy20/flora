export const config = {
    db: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || 'test',
        database: process.env.DB_NAME || 'test',
        connectTimeout: 60000,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    },
    listPerPage: 10,
};