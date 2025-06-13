const { Schema, model } = require("mongoose");

const PersonSchema = new Schema({
  id: { type: Number, default: "", unique: true },
  name: {
    ru: { type: String, default: "" },
    kk: { type: String, default: "" },
  },
  birth: {
    date: {
      ru: { type: String, default: "" },
      kk: { type: String, default: "" },
    },
    place: {
      ru: { type: String, default: "" },
      kk: { type: String, default: "" },
    },
  },
  death: {
    date: {
      ru: { type: String, default: "" },
      kk: { type: String, default: "" },
    },
    place: {
      ru: { type: String, default: "" },
      kk: { type: String, default: "" },
    },
  },
  biography: {
    ru: { type: String, default: "" },
    kk: { type: String, default: "" },
  },
  status: {
    ru: { type: String, default: "" },
    kk: { type: String, default: "" },
  },
});

module.exports = model("Person", PersonSchema, "persons");
