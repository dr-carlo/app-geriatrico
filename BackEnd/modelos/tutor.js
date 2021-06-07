
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({

  nombre: {
    type: String,
    required: [true, 'nombre requerido']
  },
  telefono: {
    type: Number,
    required: [true, 'telefono es requerido..']
  },
  genero: {
    type: String,
    required: [true, 'telefono es requerido..']
  },
  direccion: {
    type: String,
    required: [true, 'direccion es requerido..']
  },
  fechaNac: {
    type: Date,
    default: Date.now
    // required: [true, 'fecha es requerido..']
  },
  email: {
    type: String,
    required: [true, 'email es requerido..']
  },
  password: {
    type: String,
    required: [true, 'email es requerido..']
  }
  });

const PostT =  mongoose.model('tutores', postSchema);
module.exports = PostT;

