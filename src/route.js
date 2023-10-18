const express = require('express');
const router = express.Router();
const insertarPersona = require('./create.js');
const cors = require('cors');
const multer = require('multer');
const upload = multer({ dest: '../uploads' });


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
        tipo_documento_id} = req.body;

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
                    "Res": "People added failed. There was an issue inserting data into the database."
                });
            }
    } catch (err) {
        res.json({
            "Res": "People added failed. There was an issue getting data from the form."
        });
    }
});


module.exports = router;