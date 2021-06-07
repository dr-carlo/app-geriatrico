const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({

  nombre: {
    type: String,
    required: [true, 'nombre requerido']
  },
  telefono: {
    type: Number,
    required: [true, 'telefono es requerido']
  },
  genero: {
    type: String
  },
  direccion: {
    type: String,
    required: [true, 'direccion es requerido']
  },
  fechaNac: {
    type: Date,
    default: Date.now
  },
  email: {
    type: String,
    required: [true, 'email es requerido']
  },
  password: {
    type: String,
    required: [true, 'clave requerida']
  }
  });

const PostT =  mongoose.model('tutores', postSchema);
module.exports = PostT;
