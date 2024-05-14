const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());

//mongodb connection
const mongoUrl =
  "mongodb+srv://adarsh:adarsh@cluster0.zllye.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

app.listen(5000, () => {
  console.log("Server Started");
});

require("./imageSchema");
const Images = mongoose.model("ImageScehma");

app.post("/upload-image", async (req, res) => {
  const { image } = req.body;
  try {
    await Images.create({ image: image });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: error });
  }
});

app.get("/get-images", async (req, res) => {
  try {
    const image = await Images.find({});

    res.send({ status: "ok", data: image });
  } catch (error) {
    res.send({ status: error });
  }
});
