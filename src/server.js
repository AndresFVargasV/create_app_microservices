const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const customerRoutes = require('./route');


// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Routes
app.use('/api/task', customerRoutes);

// Starting the server
const port = 3000;
app.listen(app.get('port'), () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});