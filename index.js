const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const toursRoute = require("./routes/v1/tours.route")


// middlewares
app.use(express.json());
app.use(cors());


//checking routes
app.get("/", (req, res) => {
    res.send("working properly!");
})

app.use("/api/v1/tours", toursRoute)

module.exports = app;
