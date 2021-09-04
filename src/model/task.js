const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = Schema({
  cedula: Number,
  nombre: String,
  correo: String,
  telefono: Number,
  direccion: String,
  ciudad: String,
  descripcion: String,
});

module.exports = mongoose.model("clientes", TaskSchema);
