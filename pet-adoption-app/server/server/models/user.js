const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePicture: { type: String },
  role: { type: String, enum: ["user", "admin"], default: "user" },
  dogPerson: { type: Boolean },
  catPerson: { type: Boolean },
  experience: { type: String },
  lifestyle: { type: String },
  livingEnvironment: { type: String },
  vetContact: { type: String },
  aiScore: { type: Number, default: 0 },
  adoptionHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: "Pet" }],
});

module.exports = mongoose.model("User", userSchema);
