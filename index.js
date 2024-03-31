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

// import Schemas
const Team = require("./db/Team");
const Game = require("./db/Game");
const Conference = require("./db/Conference");

// Environment variables
dotenv.config();

function main() {
  portDB();


}

function portDB() {
  app.listen(port, () => {
    console.log(`The server is listening on port ${port}`);
  })

  mongoose.connect(process.env.ATLAS_URI, {})
    .then(console.log(`Connected! ${mongoose.connection.db}`))
    .catch(e => console.error(e.message));
}

main();
