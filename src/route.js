const express = require('express');
const router = express.Router();
const insertarPersona = require('./create');

router.get('/', (req, res) => {
    res.json({
        "Res": "API is working"
    });
});

router.post('/createpeople', async (req, res) => {
    const {
        primer_nombre,
        segundo_nombre,
        apellidos,
        fecha_nacimiento,
        genero_id,
        correo_electronico,
        celular,
        numero_documento,
        tipo_documento_id,
        foto} = req.body;

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

        if (result) {
            res.json({
                "Res": "People added successful"
            });
        } else if (result === null) {
            res.json({
                "Res": "People added failed"
            });
        }
    } catch (err) {
        console.error('Error al verificar el inicio de sesión:', err.message);
        res.json({
            "Res": "Login failed"
        });
    }
});


module.exports = router;