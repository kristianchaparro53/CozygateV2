const mongoose = require('mongoose');

const AccesSchema = mongoose.Schema({
    
    Action: {
        type: String,
        required: true
    },
    Date: {
        type: String,
        required: true
    },
    Time: {
        type: String,
        required: true
    }
    
}); 




module.exports = mongoose.model('access', AccesSchema);