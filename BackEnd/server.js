
const express = require("express");
const http = require('http');
const cors = require('cors');
const path = require('path');
const postRoute = require('./rutas');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mean_todo');
const port = process.env.PORT || 3001;
const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.static(path.resolve(__dirname, './public')));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/', postRoute);

server.listen(port, () => console.log( ' \n App servida en puerto: ', port, 'USAR CON DISCRECION :)  \n ' ));
