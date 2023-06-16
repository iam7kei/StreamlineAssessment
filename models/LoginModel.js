const mongoose = require("mongoose");

const loginSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter a username"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
  },
});

const Login = mongoose.model("users", loginSchema);
module.exports = Login;
