const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");

const app = require("./app");

// database connection
mongoose.connect('mongodb+srv://dbBasicMVC:VyTQ1jQZwmqRNpCO@cluster0.ru8xnum.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log(`Database connection is working properly`.red.bold);
    console.log(`my coder wanted to see blue color`.blue.bold);
})


// server
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`server is running on the port ${port}`.yellow.bold);
})
