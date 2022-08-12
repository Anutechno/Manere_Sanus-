const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
    //   required: [true, "Please enter an email"],
    //   unique: [true, "Email already exists"],
  },
  password: {
    type: String,
    // required: [true, "Please enter a password"],
    // minlength: [6, "Password must be at least 6 characters"],
    //select: false,
  },
  mob_no: {
    type: String,
  },
  gender: {
    type: String,
  },
  dob: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
