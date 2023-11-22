const express = require('express');
const router = express.Router();
const {insertarPersona, insertarPersona_logs, checkUser} = require('./create.js');
const cors = require('cors');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


router.get('/', (req, res) => {
    res.json({
        "Res": "API is working"
    });
});

router.post('/createpeople', cors(), upload.single('foto'), async (req, res) => {
    const {
        primer_nombre,
        segundo_nombre,
        apellidos,
        fecha_nacimiento,
        genero_id,
        correo_electronico,
        celular,
        numero_documento,
        tipo_documento } = req.body;

    const foto = req.file;

    try {
        
        if (checkUser(numero_documento)){
            res.status(503).json({
                "res": "User already exist"
            });
        } else {

            // Llamado a la función que inserta una persona en la colección 'crudmicroservices'
            const result = await insertarPersona(primer_nombre, segundo_nombre, apellidos, fecha_nacimiento, genero_id,
                correo_electronico, celular, numero_documento, tipo_documento, foto);

            // Responder con el resultado de la inserción   
            if (result) {
                res.status(200).json({
                    "res": "People added successful"
                });
            } else {
                res.status(503).json({
                    "res": "People added failed"
                });
            }
        }
    } catch (err) {
        res.status(503).json({
            "res": "People added failed"
        });
    }
});


module.exports = router;