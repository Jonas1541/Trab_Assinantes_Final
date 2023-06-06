const express = require('express');
const router = express.Router();
const subControlador = require('../Controllers/SubControlador');
const { upload } = require('../Middlewares/upload');

router.get('/', subControlador.list);
router.get('/filtro/:filtro/:valor', subControlador.filtrar);
router.post('/', upload.single('fotoPerfil'), subControlador.save);
router.get('/:id', subControlador.searchID);
router.put('/:id', subControlador.updating);
router.delete('/:id', subControlador.delete);

module.exports = router;