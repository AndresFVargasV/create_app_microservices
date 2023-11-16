const express = require('express');
const router = express.Router();
const insertarPersona = require('./create.js');
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
        tipo_documento_id } = req.body;

    const foto = req.file;

    try {
        const result = await insertarPersona(primer_nombre,
            segundo_nombre,
            apellidos,
            fecha_nacimiento,
            genero_id,
            correo_electronico,
            celular,
            numero_documento,
            tipo_documento_id,
            foto);

        if (result === true) {
            res.json({
                "Res": "People added successful"
            });
        } else {
            res.json({
                "Res": "People added failed"
            });
        }
    } catch (err) {
        console.error('Error al insertar datos:', err.message);
        res.json({
            "Res": "People added failed"
        });
    }
});


module.exports = router;