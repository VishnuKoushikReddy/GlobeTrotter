const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  phone: String,
  city: String,
  country: String,
  additionalInfo: String,
  password: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
    default: "/images/default-user.png",
  },
});

module.exports = mongoose.model("User", userSchema);
