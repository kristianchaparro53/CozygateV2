const mongoose = require('mongoose');

const VisitaSchema = mongoose.Schema({
    
    Name: {
        type: String,
        required: true
    },
    Tipo: {
        type: String,
        required: true
    },
    Date: {
        type: String,
        required: true
    },
    Modelo: {
        type: String,
        required: true
    }
    ,
    Placa: {
        type: String,
        required: true
    },
    Uid:{
        type: String,
        required: false
    }
    
}); 




module.exports = mongoose.model('visita', VisitaSchema);