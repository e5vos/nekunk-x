const mongoose = require("mongoose");
const { Schema } = mongoose;

const galeriaSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  pictures: {
    type: [String],
    required: true,
  },
});

const Galeria = mongoose.model("Galeria", galeriaSchema);

module.exports = Galeria;
