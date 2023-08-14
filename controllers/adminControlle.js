const { default: mongoose } = require('mongoose');
const User = require('../models/admin');
const user = require('../models/admin');

exports.addAdmin = async (req,res) => {
    try {
        let user;
        user = new User(req.body);
        await user.save();
        res.send(user);
        
    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error");
    }
}   

exports.getAdmin = async (req,res) => {
    try {
        const users = await User.find();
        res.json(users);    
    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error");
    }
}

exports.getOneAdmin = async (req, res) => {
    try {
        // Obtener el ID del usuario que se desea eliminar desde los parámetros de la solicitud (puedes usar req.params o req.body según cómo envíes el ID)
        const _idU = req.params.id; 
        // Verificar si el usuario existe antes de eliminarlo
        const user = await User.findOne({User:_idU});
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.json(user)
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al eliminar el usuario");
    }
}
exports.deleteAdmin = async (req, res) => {
    try {
        // Obtener el ID del usuario que se desea eliminar desde los parámetros de la solicitud (puedes usar req.params o req.body según cómo envíes el ID)
        const _idU = req.params.id; 
        // Verificar si el usuario existe antes de eliminarlo
        const user = await User.findOneAndDelete({_id:_idU});
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al eliminar el usuario");
    }
}

exports.updateAdmin = async (req, res) => {
    try{
        const uid  = req.params.id;
        const cambios = req.body;
        let user = await User.findOneAndUpdate({User:uid},{$set:cambios});
        if(!user){
            return res.status(404).json({ msg: "El usuario no existe" });
        }
        let userC = await User.findOne({User:uid});
        res.send(userC);
    }
    catch (error){
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}