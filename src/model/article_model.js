const connection = require('../db/connection');


async function getArticleById(id) {
    const query = 'SELECT * FROM articles WHERE id = $1';
    const values = [id];

    try {
        const result = await connection.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error('Error fetching article by ID:', error);
        throw error;
    }
}
async function getAllArticles() {
    const query = 'SELECT * FROM articles';

    try {
        const result = await connection.query(query);
        return result.rows;
    } catch (error) {
        console.error('Error fetching all articles:', error);
        throw error;
    }
}

module.exports = {
    getArticleById,
    getAllArticles
};


// // Article data schema from postman
// {
//     "data": [
//         {
//             "id": 2,
//             "documentId": "p8l8pacqnmvzfvft9rv77kzi",
//             "title": "Lets learn all about sheep",
//             "description": "Lets learn all about sheep. Look at mr. sheep below in the picture.",
//             "slug": "lets-learn-all-about-sheep",
//             "createdAt": "2025-02-10T19:22:41.190Z",
//             "updatedAt": "2025-02-10T19:22:41.190Z",
//             "publishedAt": "2025-02-10T19:22:41.220Z"
//         },
//         {
//             "id": 4,
//             "documentId": "utl8z31s7zq2xsmo8dtk7pr6",
//             "title": "Working with tailwind CSS",
//             "description": "An intro into Styling Moden Web Applications using Tailwinf CSS",
//             "slug": null,
//             "createdAt": "2025-02-10T20:10:59.082Z",
//             "updatedAt": "2025-03-13T00:30:29.397Z",
//             "publishedAt": "2025-03-13T00:30:29.437Z"
//         }
//     ]
// }
