require('dotenv').config();
const { Pool } = require('pg');

// Create a new pool instance to manage your PostgreSQL connections
const pool = new Pool({
    host: process.env.HOST,
    user: process.env.USERDB,
    password: process.env.PASSWORD,
    database: process.env.DB,
    port: process.env.DB_PORT, // PostgreSQL default port is 5432
});

pool.connect(error => {
    if (error) {
        console.log('Database connection failed:' + error.stack);
        throw error;
    }
    console.log("Successfully connected to the PostGreSQL Database.");
});

// Handle pool errors
pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});


module.exports = pool;