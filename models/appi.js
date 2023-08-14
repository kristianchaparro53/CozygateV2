const mongoose = require('mongoose');

const appiSchema = mongoose.Schema({
    
    Name: {
        type: String,
        required: true
    },
    Qr: {
        type: String,
        default:"Activo",
        required: true
    },
    Auto: {
        type: String,
        required: true
    },
    Uid: {
        type: String,
        required: true
    }


    
}); 




module.exports = mongoose.model('appi', appiSchema);