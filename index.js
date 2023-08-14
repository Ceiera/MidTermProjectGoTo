require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;
const videoRoutes = require("./src/routes/videos.route");
const productRoutes = require("./src/routes/products.route");
const commentRoutes = require("./src/routes/comments.route");
const cors = require("cors");

mongoose.connect(mongoString);
const db = mongoose.connection;

db.on("error", (err) => {
  console.log(err);
});

db.once("connected", () => {
  console.log(`DB Connected`);
});
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/videos", videoRoutes);
app.use("/products", productRoutes);
app.use("/comments", commentRoutes);

const listener = app.listen(80, function () {
  console.log("Listening on port " + listener.address().port);
});
