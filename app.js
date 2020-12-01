const express = require('express');

const app = express();

// ROUTES 
app.get('/', (req, res) => {
    res.send('Hola mundo');
})
// COMO COMENZAR A ESCUCHAR AL SERVIDOR
app.listen(3000);