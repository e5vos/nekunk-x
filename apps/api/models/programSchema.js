const mongoose = require("mongoose");
const { Schema } = mongoose;

const programSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  contactName: {
    type: String,
    required: false,
  },
  contactEmail: {
    type: String,
    required: false,
  },
  contactPhone: {
    type: String,
    required: false,
  },
  registerLink: {
    type: String,
    required: false,
  },
});

const Program = mongoose.model("Program", programSchema);

module.exports = Program;
