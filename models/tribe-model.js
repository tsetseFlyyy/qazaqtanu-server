const { Schema, model } = require("mongoose");

const TribeSchema = new Schema({
  id: { type: String },
  name: { type: String },
  battleCry: { type: String },
  division: { type: Number },
  description: { type: String },
  representatives: { type: [String] },
});

module.exports = model("Tribe", TribeSchema);
