const express = require('express');

// Initialize Express APP

const app = express();

// Mount Middleware

app.use(express.json());

// Mount Routes

app.use('/scores', require('./routes/scores'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`APP is now listening on port: ${PORT}`)
});