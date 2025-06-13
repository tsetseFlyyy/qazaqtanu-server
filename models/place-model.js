const { Schema, model } = require("mongoose");

const PlaceSchema = new Schema({
  id: { type: String, required: true, unique: true },
  name: {
    ru: { type: String, required: true },
    kk: { type: String, default: "" },
  },
  description: {
    ru: { type: String, default: "" },
    kk: { type: String, default: "" },
  },
  category: { type: String, default: "" },
  region: { type: String, required: true },
});

module.exports = model("Place", PlaceSchema);
