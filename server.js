
// import express from "express";
// // import { createServer } from "http";
// import cors from "cors";
// import Post from "./modelo";
// import logger from "morgan";
// import cookieParser from "cookie-parser";
// import path from "path";
// import postRoute from "./rutas";
// import mongoose from "mongoose";

const express = require("express");
const http = require('http');
// // const createServer = require('http').createServer;
const cors = require('cors');
const path = require('path');
const postRoute = require('./rutas');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mean_todo');
const port = process.env.PORT || 3001;
const app = express();
// // const server = createServer(app);
const server = http.createServer(app);

// PARA VER PETICIONES EN CONSOLA
// app.use(logger('dev'));
// app.use(cookieParser());

app.use(cors());
app.use(express.static(path.resolve(__dirname, './public')));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/', postRoute);

server.listen(port, () => console.log( ' \n App servida en puerto: ', port, ' usar con discrecion  \n ' ));
