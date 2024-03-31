/* SETUP */
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
// import express from "express";
// import mongoose from "mongoose";
// import bodyParser from "body-parser";
// import dotenv from "dotenv";

const app = express();
const port = 3000;
// dotenv.config();

// // Require routes from routes folder
// const teamRoutes = require('./routes/teamRoutes')
// const gameRoutes = require('./routes/gameRoutes')
// const confRoutes = require('./routes/confRoutes')

// Environment variables
dotenv.config();

function main() {
  portDB();


}

function portDB() {
  app.listen(port, () => {
    console.log(`The server is listening on port ${port}`);
  })
  
  mongoose.connect(process.env.ATLAS_URI)
    .then(console.log("Connected!"))
    .catch(e => console.error(e.message));
}

// Listen to the port

main();
