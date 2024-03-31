/* SETUP */
// require statements
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const dotenv = require('dotenv')

// import statements
// import express from "express";
// import mongoose from "mongoose";
// import bodyParser from "body-parser";
// import dotenv from "dotenv";

// Environment variables
dotenv.config();
const app = express();
// const port = 3000;

// import Schemas
const Conference = require('./db/Conference');
const Team = require('./db/Team');
const Game = require('./db/Game');

// import data to populate database
const conferences = require('./data/conferences');
const teams = require('./data/teams');
const games = require('./data/games');
// import conferences from './data/conferences';
// import teams from './data/teams';
// import games from './data/games';

async function main() {
  portListen();
  connectDB();

  // populate database
  populateDB(conferences, Conference)
  populateDB(teams, Team)
  populateDB(games, Game)
}

async function addToDB(item, model) {
  try {
    const x = await model.create(item);
    console.log(x);
  } catch (e) {
    console.log(e.message);
  }
}

async function populateDB(array, model) {
  array.forEach(element => {
    addToDB(element, model)
  });
  // switch (model) {
  //   case Team:
  //     addTeam(element)
  //     break;
  //   case Game:
  //     // addGame(element)
  //     break;
  //   case Conference:
  //     addToDB(element, model)
  //     break;
  //   default:
  //     break;
  // }
}

function portListen() {
  const port = process.env.PORT
  app.listen(port, () => {
    console.log(`The server is listening on port ${port}`);
  })
}

async function connectDB() {
  const conn = mongoose.connect(process.env.ATLAS_URI)
    .then(console.log(`Connected! ${mongoose.connection.db}`))
    .catch(e => console.error(e.message));

  // await conn.dropDatabase();
}

function closeDB() {
  mongoose.close();
}

// Run
main();

// async function addTeam(team) {
//   try {
//     const conf = await Conference.findOne({name: team.conference})
//     const newTeam = {...team, conference: conf}
//     addToDB(newTeam, Team)
//   } catch (e) {
//     console.log(e.message);
//   }
// }

