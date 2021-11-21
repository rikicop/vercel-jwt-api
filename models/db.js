const mongoose = require("mongoose");

const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;
const DBNAME = process.env.DBNAME;

const uri = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.dcjlt.mongodb.net/${DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function () {
  console.log("Connected to the DB");
});

/* console.log("Hola: ", db.client); */
