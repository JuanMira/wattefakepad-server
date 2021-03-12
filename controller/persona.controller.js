const personaCtrl = {};

const Persona = require('../model/persona.model');

personaCtrl.getDescription = async (req, res) => {
    const { idUser } = req.query;
    const response = await Persona.findById(idUser)
    console.log(idUser)
    res.json(response)
}

personaCtrl.createDescription = async (req, res) => {
    const { userId, description } = req.query;
    try {
        const newPersona = new Persona({
            _id: userId,
            description
        });
        await newPersona.save();
        res.json({
            message: "Descripcion creada correctamente"
        })
    } catch (err) {
        res.status(400).json({
            message: "Ha ocurrido un error"
        })
    }
}

module.exports = personaCtrl;