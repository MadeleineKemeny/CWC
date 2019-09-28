const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");

// Read environment variables from .env
// Please make sure you have a ".env" file in the Fantastic4 folder
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/CDCDB', { useNewUrlParser: true });

// Add routes, both API and view
app.use(routes);


// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
