require("../models/db");
const Usuario = require("../models/Usuario");

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
