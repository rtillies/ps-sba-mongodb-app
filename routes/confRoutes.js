const express = require('express')
const router = express.Router()
const games = require('../data/conferences')

// GET: read all conferences
router.get('/', (req, res) => {
  // res.send('GET: read all conferences')
  res.json(games)
  // res.render('games/index', {games})
})

// POST: create new game
router.post('/', (req, res, next) => {
  res.send('POST: create new conference')
  // if(req.body.code && req.body.date && req.body.homeTeam && req.body.awayTeam && req.body.homeScore && req.body.awayScore) {
  //   if (games.find((g) => g.code == req.body.code)) {
  //     res.json({ error: `Game code already exists: ${g.code}` })
  //     return
  //   }
  //   const winner = req.body.homeScore > req.body.awayScore 
  //     ? req.body.homeTeam
  //     : req.body.awayTeam

  //   const newGame = {
  //     id: games[games.length - 1].id + 1,
  //     code: req.body.code,
  //     date: req.body.date,
  //     homeTeam: req.body.homeTeam,
  //     awayTeam: req.body.awayTeam,
  //     homeScore: req.body.homeScore,
  //     awayScore: req.body.awayScore,
  //     winner: winner
  //   }
  //   games.push(newGame)
  //   console.log(`Successful POST: ${newGame.id} ${newGame.homeTeam} vs ${newGame.awayTeam}`);
  //   res.json(games[games.length - 1])
  // } else {
  //   res.json({ error: 'Insufficient Data'})
  // }
})

// GET: read conference by id
router.get('/:id', (req, res) => {
  // res.send(`GET: read conference by id ${req.params.id}`)
  const conf = games.find((g) => g.id == req.params.id)
  if(conf) {
    res.json(conf)
    // res.render('conferences/conf', {conf});
  }
  else next();
})

// PATCH: update conferences by id
router.patch('/:id', (req, res) => {
  // res.send(`PATCH: update conference by id ${req.params.id}`)
  // const game = games.find((g, i) => {
  //   if (g.id == req.params.id) {
  //     for (const key in req.body) {
  //       games[i][key] = req.body[key];
  //     }
  //     return true;
  //   }
  // });

  // if(game) res.json(game)
  // else next();
})

// DELETE: delete conference by id
router.delete('/:id', (req, res) => {
  // res.send(`DELETE: delete conference by id ${req.params.id}`)
  // const game = games.find((g, i) => {
  //   if (g.id == req.params.id) {
  //     games.splice(i, 1);
  //     return true;
  //   }
  // });

  // if(game) res.json(game)
  // else next();
})

module.exports = router;