
// import mongoose from "mongoose";
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({

  nombre: {
    type: String,
    match: /^[a-zA-Z '.-]*$/,
    required: [true, 'nombre requerido']
  },

  email: {
    type: String,
    match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    required: [true, 'email es requerido..']
  },
  
  obsocial: { type: String,
    required: [true, 'email es requerido..'] },

  dni: {
    type: Number,
    required: [true, 'email es requerido..']
  }
  // date: {
  //   type: Date,
  //   default: Date.now
  // }
  });

// export default mongoose.model('Posts', postSchema);
const Post =  mongoose.model('pacientes', postSchema);
module.exports = Post;




