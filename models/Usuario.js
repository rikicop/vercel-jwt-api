const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  username: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    max: 255,
  },
  isAdmin: {
    type: Boolean,
    require: true,
  },
});

module.exports = mongoose.model("Usuario", userSchema);
