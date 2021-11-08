const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");

//router.get("/api/usuarios/", usuarioController.listUsuarios);
router.post("/api/usuarios/", usuarioController.insertSingleUsuario);
//router.patch("/api/usuarios/:id", usuarioController.updateSingleUsuario);
//router.delete("/api/usuarios/:id", usuarioController.deleteSingleUsuario);

module.exports = router;
