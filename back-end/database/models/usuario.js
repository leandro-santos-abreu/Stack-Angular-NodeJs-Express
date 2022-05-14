const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    Nome: {type: String, required: true},
    Sobrenome: {type: String, required: true},
    Senha: {type: String, required: true},
    Email: {type: String, required: true},
});

const Usuario = mongoose.model('Usuario', UsuarioSchema);

module.exports = Usuario;
