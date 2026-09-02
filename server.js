const express = require('express');
const app = express();

// Render automatically assigns a PORT variable
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Server running successfully on Render!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
