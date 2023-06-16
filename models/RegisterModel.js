const mongoose = require("mongoose");

const registerSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a name"],
  },
  username: {
    type: String,
    required: [true, "Please enter a username"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
  },
});

const Register = mongoose.model("Register", registerSchema);
module.exports = Register;
