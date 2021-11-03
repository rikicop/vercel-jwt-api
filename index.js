const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
app.use(express.json());

const users = [
  {
    id: "1",
    username: "jhon",
    password: "jhon123",
    isAdmin: true,
  },
  {
    id: "2",
    username: "jame",
    password: "jhon123",
    isAdmin: false,
  },
];

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => {
    return u.username === username && u.password === password;
  });
  if (user) {
    //Generar Token de Acceso
    const accessToken = jwt.sign(
      { id: user.id, isAdmin: user.isAdmin },
      "mySecreteKey"
    );
    res.json({
      username: user.username,
      isAdmin: user.isAdmin,
      accessToken,
    });
  } else {
    res.status(400).json("Username or password incorrect!");
  }
});

app.listen(5000, () => console.log("El servidor está corriendo"));
