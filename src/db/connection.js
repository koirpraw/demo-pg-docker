require('dotenv').config();
const { Pool } = require('pg');

// Create a new pool instance to manage your PostgreSQL connections
const pool = new Pool({
    host: process.env.HOST,
    user: process.env.USERDB,
    password: process.env.PASSWORD,
    database: process.env.DB,
    port: process.env.DB_PORT || 5432,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 5000,
});

// Test the connection with retry logic
const testConnection = async () => {
    try {
        const client = await pool.connect();
        console.log("Successfully connected to the PostgreSQL Database.");
        client.release();
    } catch (error) {
        console.error('Database connection failed:', error.message);
        console.error('Host:', process.env.HOST);
        console.error('User:', process.env.USERDB);
        console.error('Database:', process.env.DB);
        console.error('Port:', process.env.DB_PORT);
        // Don't exit the process, let the app start even if DB is temporarily unavailable
    }
};

// Test connection on startup
testConnection();

// Handle pool errors
pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
});

module.exports = pool;