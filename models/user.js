const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true 
    }, 
    Correo: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Cel: {
        type: String,
        required: true
    },
    Calle: {
        type: String,
        required: true
    },
    Casa: {
        type: String,
        required: true
    },
   
    Model: {
        type: String,
        required: false
    },
    Year: {
        type: String,
        required: false
    }
    ,
    Color: {
        type: String,
        required: false
    },
    Placas: {
        type: String,
        required: false
    },
    Foto: {
        type: String,
        required: false
    }
    
}); 

module.exports = mongoose.model('users', UserSchema);