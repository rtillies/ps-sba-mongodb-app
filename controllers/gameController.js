const asyncHandler = require('express-async-handler');
const Game = require('../db/Game')

const getGames = asyncHandler(async (req, res) => {
  const games = await Game.find();
  res.status(200).json(games)
});

const setGame = asyncHandler(async (req, res) => {
  if (!req.body.date || !req.body.homeTeam || !req.body.awayTeam || 
      !req.body.homeScore || !req.body.awayScore) {
    res.status(400);
    throw new Error(`Game required information: 
      Date, Home Team, Away Team, Home Score, Away Score`);
  }

  const winner = req.body.homeScore > req.body.awayScore 
    ? req.body.homeTeam : req.body.awayTeam

  const game = await Game.create({
    date: req.body.date,
    homeTeam: req.body.homeTeam,
    awayTeam: req.body.awayTeam,
    homeScore: req.body.homeScore,
    awayScore: req.body.awayScore,
    winner: winner,
  });
  res.status(200).json(game);
});

const getGamesByTeam = asyncHandler(async (req, res) => {
  const games = await Game.findByTeam(req.params.team)
  if (games.length === 0) {
    res.status(400);
    throw new Error(`Game not found: ${req.params.name}`);
  }
  res.status(200).json(games.length)
});

module.exports = {
  getGames,
  setGame,
  getGamesByTeam,
}