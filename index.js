const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Define a simple route
app.get('/', (req, res) => {
    res.send({ message: 'Welcome to the Simple Node.js API!' });
});

// Sample endpoint
app.get('/api/example', (req, res) => {
    res.send({ data: 'This is an example endpoint' });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
