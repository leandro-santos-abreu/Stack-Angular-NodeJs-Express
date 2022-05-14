const mongoose = require('mongoose');

const EventoSchema = new mongoose.Schema({
    Descricao: {type: String},
    Data: {type: Date},
    _usuarioId: {type: mongoose.Types.ObjectId, required: true},
    Pago: {type: Boolean, default: false, required: true}
});

const Evento = mongoose.model('Evento', EventoSchema);

module.exports = Evento;