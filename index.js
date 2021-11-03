const express = require("express");

const app = express();
app.use(express.json());

const users = [
  {
    id: "1",
    unsername: "jhon",
    password: "jhon123",
    isAdmin: true,
  },
  {
    id: "2",
    unsername: "jame",
    password: "jhon123",
    isAdmin: false,
  },
];

app.post("/api/login", (req, res) => {
  /* const { username, password } = req.body; */
  res.json("Hey Funciona!!");
});

app.listen(5000, () => console.log("El servidor está corriendo"));
