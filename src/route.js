const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        "Res": "API is working"
    });
});

router.post('/login', async (req, res) => {

});


module.exports = router;