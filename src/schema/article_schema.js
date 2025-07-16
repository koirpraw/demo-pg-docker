

// // Article data schema from postman
// //    "id": 4,
// //     "documentId": "utl8z31s7zq2xsmo8dtk7pr6",
// //     "title": "Working with tailwind CSS",
// //     "description": "An intro into Styling Moden Web Applications using Tailwinf CSS",
// //     "slug": null,
// //     "createdAt": "2025-02-10T20:10:59.082Z",
// //     "updatedAt": "2025-03-13T00:30:29.397Z",
// //     "publishedAt": "2025-03-13T00:30:29.437Z"
// const { Pool } = require('pg');

// const pool = new Pool({
//     user: process.env.USERDB,
//     host: process.env.HOST,
//     database: process.env.DB,
//     password: process.env.PASSWORD,
//     port: process.env.PORT,
// });

// module.exports = pool;
// // src/schema/article_schema.js
// const pool = require('../db/connection');
// const createArticleTable = async () => {
//     const query = `
//         CREATE TABLE IF NOT EXISTS articles (
//             id SERIAL PRIMARY KEY,
//             documentId VARCHAR(255) NOT NULL,
//             title VARCHAR(255) NOT NULL,
//             description TEXT NOT NULL,
//             slug VARCHAR(255),
//             createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//             updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//             publishedAt TIMESTAMP
//         )
//     `;

//     try {
//         await pool.query(query);
//         console.log('Article table created successfully.');
//     } catch (error) {
//         console.error('Error creating article table:', error);
//     }
// };