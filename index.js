require('dotenv').config()
const express = require("express")
const mongoose = require('mongoose')
const mongoString = process.env.DATABASE_URL
const videoRoutes = require('./routes/videos.route')

mongoose.connect(mongoString)
const db = mongoose.connection;

db.on('error', (err) => {
    console.log(err)
});

db.once('connected', () => {
    console.log(`DB Connected`)
});
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, "public")));
app.use('/videos', videoRoutes)
const listener = app.listen(3000, function () {
  console.log("Listening on port " + listener.address().port)
});
