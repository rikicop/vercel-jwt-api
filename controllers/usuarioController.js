require("../models/db");
const Usuario = require("../models/Usuario");

/* GET All Movies */

exports.listUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find({});
    res.json(usuarios);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

/* POST  Usuario */

exports.insertSingleUsuario = async (req, res) => {
  const newUsuario = new Usuario({
    id: req.body.id,
    username: req.body.username,
    password: req.body.password,
    isAdmin: req.body.isAdmin,
  });

  try {
    await newUsuario.save();
    res.json(newUsuario);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};
