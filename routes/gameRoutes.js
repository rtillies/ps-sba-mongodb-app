const express = require('express')
const router = express.Router()
const games = require('../data/games')

// GET: read all games
router.get('/', (req, res) => {
  // res.send('GET: read all games')
  res.json(games)
  // res.render('games/index', {games})
})

// POST: create new game
router.post('/', (req, res, next) => {
  res.send('POST: create new game')
  // if(req.body.TeamName && req.body.Conference && req.body.Captain && req.body.Teammate && req.body.City && req.body.State) {
  //   if (teams.find((t) => t.TeamName == req.body.TeamName)) {
  //     res.json({ error: `Team Name already exists: ${req.body.TeamName}`})
  //     return
  //   }
  //   const newTeam = {
  //     ID: teams[teams.length - 1].ID + 1,
  //     TeamName: req.body.TeamName,
  //     Conference: req.body.Conference,
  //     Captain: req.body.Captain,
  //     Teammate: req.body.Teammate,
  //     City: req.body.City,
  //     State: req.body.State,
  //     Wins: 0,
  //     Loss: 0
  //   }
  //   teams.push(newTeam)
  //   console.log(`Successful POST: ${newTeam.ID} ${newTeam.TeamName}`);
  //   res.json(teams[teams.length - 1])
  // } else {
  //   res.json({ error: 'Insufficient Data'})
  // }
})

// GET: read game by id
router.get('/:id', (req, res) => {
  // res.send(`GET: read game by id ${req.params.id}`)
  const game = games.find((g) => g.id == req.params.id)
  if(game) {
    // res.render("games/game", {game});
    res.json(game)
  }
  else next();
})

// PATCH: update game by id
router.patch('/:id', (req, res) => {
  res.send(`PATCH: update game by id ${req.params.id}`)
  // const team = teams.find((t, i) => {
  //   if (t.ID == req.params.id) {
  //     for (const key in req.body) {
  //       teams[i][key] = req.body[key];
  //     }
  //     return true;
  //   }
  // });
  // if(team) res.json(team)
  // else next();
})

// DELETE: delete game by id
router.delete('/:id', (req, res) => {
  res.send(`DELETE: delete game by id ${req.params.id}`)
  // const game = games.find((t, i) => {
  //   if (t.ID == req.params.id) {
  //     games.splice(i, 1);
  //     return true;
  //   }
  // });

  // if(game) res.json(game)
  // else next();
})

module.exports = router;