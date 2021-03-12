const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');
//crear el servidor
const app = express();

//middlewares
app.use(express.json({ extended: true }));
app.use(cors())

conectarDB()

//puerto de la app 
const PORT = process.env.PORT || 4000;
//definir la pagina principal

//importar rutas
app.use('/api/books', require('./routes/books.routes'))
app.use('/api/book/', require('./routes/book.routes'))
app.use('/api/persona', require('./routes/persona.routes'))

//iniciar servidor
app.listen(PORT, () => {
    console.log(`El servidor esta funcionando en el puerto ${PORT}`)
});
