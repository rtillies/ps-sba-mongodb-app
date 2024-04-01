const asyncHandler = require('express-async-handler');
const Game = require('../db/Game')

const getGames = asyncHandler(async (req, res) => {
  const games = await Game.find();
  res.status(200).json(games)
});

const setGame = asyncHandler(async (req, res) => {
  // if (!req.body.name || !req.body.conference || !req.body.captain || 
  //     !req.body.partner || !req.body.location) {
  //   res.status(400);
  //   throw new Error('Game required information: Name, Conference, Captain, Partner, Location');
  // }
  // const Game = await Game.create({
  //   name: req.body.name,
  //   conference: req.body.conference,
  //   captain: req.body.captain,
  //   partner: req.body.partner,
  //   location: req.body.location,
  //   wins: 0,
  //   loss: 0,
  // });
  // res.status(200).json(Game);
});

const getGamesByTeam = asyncHandler(async (req, res) => {
  const games = await Game.findByTeam(req.params.team)
  if (games.length === 0) {
    res.status(400);
    throw new Error(`Game not found: ${req.params.name}`);
  }
  res.status(200).json(games.length)
});

// const updateGame = asyncHandler(async (req, res) => {
//   const Game = await Game.findByName(req.params.name)

//   if (!Game) {
//     res.status(400);
//     throw new Error(`Game not found: ${req.params.name}`);
//   }

//   const updatedGame = await Game.findByIdAndUpdate(
//     Game._id, req.body, { new: true, }
//   );
//   res.status(200).json(updatedGame)
// });

// const deleteGame = asyncHandler(async (req, res) => {
//   const name = req.params.name
//   const Game = await Game.findByName(name)
//   if (!Game) {
//     res.status(400);
//     throw new Error(`Game not found: ${name}`);
//   }

//   await Game.deleteOne({name: name})

//   res.status(200).json({message: `Game deleted: ${name}`})
// });

module.exports = {
  getGames,
  setGame,
  getGamesByTeam,
  // updateGame,
  // deleteGame,
}