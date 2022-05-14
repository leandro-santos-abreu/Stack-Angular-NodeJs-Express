const mongoose = require('mongoose');

const FornecedorSchema = new mongoose.Schema({
    Codigo: {type: String, required: true},
    NomeFantasia: {type: String, required: true},
    Email: {type: String, required: true},
    Telefone: {type: String}
});

const Fornecedor = mongoose.model('Fornecedor', FornecedorSchema);

module.exports = Fornecedor;