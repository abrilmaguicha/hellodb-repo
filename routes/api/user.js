const express = require('express');
const router = express.Router();
router.get('/users', (req, res) => {
res.send('todos los usuarios');
});
router.get('/user/:id', (req, res) => {
res.send('el usuario con id ' + req.params.id);
});
module.exports = router;