const express = require('express');
const app = express();
const mongoose = require('mongoose'); 

// MiddLewares
// app.use(auth);
// app.use('/posts', () => {
//     console.log('Esto es un MiddLewares');
// });

// ROUTES 
app.get('/', (req, res) => {
    res.send('Hola mundo');
})

// app.get('/posts', (req, res) => {
//     res.send('Hola posts');
// })

// Connect To DB
mongoose.connect('mongodb+srv://seba:prueba123@cluster0.7bjev.mongodb.net/grafeno?retryWrites=true&w=majority', () =>
    console.log('conectado a la DB!')
);
// COMO COMENZAR A ESCUCHAR AL SERVIDOR
app.listen(3000);