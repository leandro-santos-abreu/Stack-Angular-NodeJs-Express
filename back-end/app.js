const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('./database/mongoose')

const Evento = require('./database/models/evento')
const Fornecedor = require('./database/models/fornecedor')
const Usuario = require('./database/models/usuario')

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

// APIs Fornecedores
app.get('/fornecedores', (req,res) => {
    Fornecedor.find({})
    .then(fornecedores => res.send(fornecedores))
    .catch((error) => console.log(error))
})

app.post('/fornecedores', (req, res) => {
    (new Fornecedor({"Codigo": req.body.codigo,'NomeFantasia': req.body.nomeFantasia, 'Email': req.body.email, 'Telefone': req.body.telefone}))
        .save()
        .then((fornecedores) => res.send(fornecedores))
        .catch((error) => console.log(error))
})

app.get('/fornecedores/:fornecedorCodigo', (req, res) => {
    Fornecedor.find({'Codigo': req.params.fornecedorCodigo})
        .then((fornecedores) => res.send(fornecedores))
        .catch((error) => console.log(error))
})

app.patch('/fornecedores/:fornecedorCodigo', (req, res) => {
    Fornecedor.findOneAndUpdate({'Codigo': req.params.fornecedorCodigo}, {$set: req.body} , {new: true})
        .then((fornecedores) => res.send(fornecedores))
        .catch((error) => console.log(error))
})

app.delete('/fornecedores/:fornecedorCodigo', (req, res) => {
    Fornecedor.findOneAndDelete({'Codigo': req.params.fornecedorCodigo}, req.body )
        .then((fornecedores) => res.send(fornecedores))
        .catch((error) => console.log(error))
})

// APIs Usuários
app.get('/usuarios', (req,res) => {
    Fornecedor.find({})
    .then(usuarios => res.send(usuarios))
    .catch((error) => console.log(error))
})

app.post('/usuarios', (req, res) => {
    (new Usuario({'Nome': req.body.nome,'Sobrenome': req.body.sobrenome, 'Senha': req.body.senha, 'Email': req.body.email}))
        .save()
        .then((usuarios) => res.send(usuarios))
        .catch((error) => console.log(error))
})

app.get('/usuarios/:usuarioEmail', (req, res) => {
    Usuario.find({'Email': req.params.usuarioEmail})
        .then((usuarios) => res.send(usuarios))
        .catch((error) => console.log(error))
})

app.patch('/usuarios/:usuarioEmail', (req, res) => {
    Usuario.findOneAndUpdate({'Email': req.params.usuarioEmail}, {$set: req.body}, {new: true})
        .then((usuarios) => res.send(usuarios))
        .catch((error) => console.log(error))
})

app.delete('/usuarios/:usuarioEmail', (req, res) => {
    Usuario.findOneAndDelete({'Email': req.params.usuarioEmail}, req.body )
        .then((usuarios) => res.send(usuarios))
        .catch((error) => console.log(error))
})

app.listen(3000, () => console.log("Server Connected on port 3000"));