const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema({
    
    Name: {
        type: String,
        required: false
    },
    User: {
        type: String,
        required: false
    },
    Correo: {
        type: String,
        required: false
    }
    ,
    Password: {
        type: String,
        required: false
    }
    
}); 




module.exports = mongoose.model('admin', AdminSchema);