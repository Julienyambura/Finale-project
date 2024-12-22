const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ["dog", "cat"], required: true },
  age: { type: Number },
  breed: { type: String },
  description: { type: String },
  profilePicture: { type: String },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  adoptionStatus: {
    type: String,
    enum: ["available", "adopted"],
    default: "available",
  },
});

module.exports = mongoose.model("Pet", petSchema);
