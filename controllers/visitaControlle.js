const { default: mongoose } = require('mongoose');
const User = require('../models/visita');
const user = require('../models/visita');

exports.addVisita = async (req,res) => {
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

exports.getVisita = async (req,res) => {
    try {
        const users = await User.find();
        res.json(users);    
    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error");
    }
}

exports.getOneVisita = async (req, res) => {
    try {
        // Obtener el ID del usuario que se desea eliminar desde los parámetros de la solicitud (puedes usar req.params o req.body según cómo envíes el ID)
        const _idU = req.params.id; 
        // Verificar si el usuario existe antes de eliminarlo
        const user = await User.findOne({_id:_idU});
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.json(user)
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al eliminar el usuario");
    }
}
exports.deleteVisita = async (req, res) => {
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

exports.updateVisita = async (req, res) => {
    try {
        const usuarioId = req.params.id;
        const nuevosDatos = req.body;
    
        const usuarioActualizado = await User.findByIdAndUpdate(
          usuarioId,
          nuevosDatos,
          { new: true }
        );
    
        if (!usuarioActualizado) {
          return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(usuarioActualizado);
      } catch (error) {
        console.error('Error al actualizar el usuario:', error);
        res.status(500).json({ message: 'Error al actualizar el usuario' });
      }
}

