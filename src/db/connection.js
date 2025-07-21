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

const testConnection = async (retries = 5, delay = 5000) => {
    for (let i = 0; i < retries; i++) {
        try {
            const client = await pool.connect();
            console.log("Successfully connected to the PostgreSQL Database.");
            client.release();
            return;
        } catch (error) {
            console.error(`Database connection attempt ${i + 1} failed:`, error.message);
            console.error('Host:', process.env.HOST);
            console.error('User:', process.env.USERDB);
            console.error('Database:', process.env.DB);
            console.error('Port:', process.env.DB_PORT);

            if (i < retries - 1) {
                console.log(`Retrying in ${delay / 1000} seconds...`);
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
    }
    console.error('Failed to connect to database after all retries');
};

// Test connection on startup
testConnection();

// Handle pool errors
pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
});

module.exports = pool;