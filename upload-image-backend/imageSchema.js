const mongoose = require("mongoose");

const ImageScehma = new mongoose.Schema(
  {
    image: String,
  },
  {
    collection: "ImageScehma",
  }
);

mongoose.model("ImageScehma", ImageScehma);
