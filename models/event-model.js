const { Schema, model } = require("mongoose");

const EventSchema = new Schema({
  id: { type: Number, default: "", unique: true },
  title: {
    ru: { type: String, default: "" },
    kk: { type: String, default: "" },
  },
  date: {
    ru: { type: String, default: "" },
    kk: { type: String, default: "" },
  },
  place: {
    ru: { type: String, default: "" },
    kk: { type: String, default: "" },
  },
  meaning: {
    ru: { type: String, default: "" },
    kk: { type: String, default: "" },
  },
  info: {
    ru: { type: String, default: "" },
    kk: { type: String, default: "" },
  },
});

module.exports = model("Event", EventSchema);
