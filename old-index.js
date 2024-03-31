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
dotenv.config();

// Require routes from routes folder
const teamRoutes = require('./routes/teamRoutes')
const gameRoutes = require('./routes/gameRoutes')
const confRoutes = require('./routes/confRoutes')

// Environment variables
dotenv.config();

/* DATABASE CONNECTION */

/* MIDDLEWARE */

// BodyParser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json({extended: true}))

// serve static files from the css directory
app.use('/css', express.static('css'));

// Use Router Middleware - 
app.use('/api/teams/', teamRoutes)
app.use('/api/games/', gameRoutes)
app.use('/api/conferences/', confRoutes)

// specify the views directory
// register the template engine
app.set("views", "./views"); 
app.set("view engine", "ejs")
// app.set("view engine", "pug")


// Error handling
app.use((err, req, res, next) => {
  res.status(400).send(err.message)
})

/* ROOT ROUTES - no router needed */

// GET: render index for root route
app.get('/', (req, res) => {
  // res.send("Root GET Route works")
  // app.use(express.static("public"))
  res.render('index')
})

// GET: use regex for all routes log*
app.get('/log*', (req, res) => {
  res.render('login')
})

// Listen to the port
app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
})
