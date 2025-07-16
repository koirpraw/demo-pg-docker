const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

const articleRoutes = require('./src/routes/article_route');

app.use(cors());
app.use(express.json());

app.use('/api/articles', articleRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the PostgreSQL Docker Demo!');
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`
        Server is running on port ${PORT}
        Visit http://localhost:${PORT} to access the API.`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down gracefully');
    server.close(() => {
        console.log('Process terminated');
        process.exit(0);
    });
});

process.on('SIGINT', () => {
    console.log('SIGINT received, shutting down gracefully');
    server.close(() => {
        console.log('Process terminated');
        process.exit(0);
    });
});

console.log('Database connection established successfully.');