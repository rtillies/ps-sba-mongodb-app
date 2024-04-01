const express = require('express')
const router = express.Router()
const teams = require('../data/teams')

const { 
  getTeams, 
  setTeam, 
  getTeamByName, 
  updateTeam, 
  deleteTeam 
} = require ('../controllers/teamController')

router.route('/')
  .get(getTeams)
  .post(setTeam)

router.route('/:name')
  .get(getTeamByName)
  .patch(updateTeam)
  .delete(deleteTeam)
  
module.exports = router;

// const express = require('express')
// const server = express()

// // GET: read all teams
// router.get('/', (req, res) => {
//   // res.send('GET: read all teams')
//   // res.json(teams)
//   res.render('teams/index', {teams})
// })

// // POST: create new team
// router.post('/', (req, res, next) => {
//   // res.send('POST: create new team')
//   if(req.body.name && req.body.Team && req.body.captain && req.body.partner && req.body.city && req.body.state) {
//     if (teams.find((t) => t.name == req.body.name)) {
//       res.json({ error: `Team Name already exists: ${req.body.name}`})
//       return
//     }
//     const newTeam = {
//       id: teams[teams.length - 1].id + 1,
//       name: req.body.name,
//       Team: req.body.Team,
//       captain: req.body.captain,
//       partner: req.body.partner,
//       city: req.body.city,
//       state: req.body.state,
//       wins: 0,
//       loss: 0
//     }
//     teams.push(newTeam)
//     console.log(`Successful POST: ${newTeam.id} ${newTeam.name}`);
//     // res.json(teams[teams.length - 1])
//     res.render('teams/index', {teams})

//   } else {
//     res.json({ error: 'Insufficient Data'})
//   }
// })

// // GET: read team by id
// router.get('/:id', (req, res) => {
//   // res.send(`GET: read team by id ${req.params.id}`)
//   const team = teams.find((t) => t.id == req.params.id)
//   if(team) {
//     res.render("teams/team", {team});
//   }
//   else next();

// })

// // PATCH: update team by id
// router.patch('/:id', (req, res) => {
//   // res.send(`PATCH: update team by id ${req.params.id}`)
//   const team = teams.find((t, i) => {
//     if (t.id == req.params.id) {
//       for (const key in req.body) {
//         teams[i][key] = req.body[key];
//       }
//       return true;
//     }
//   });
//   if(team) res.json(team)
//   else next();
// })

// // DELETE: delete team by id
// router.delete('/:id', (req, res) => {
//   // res.send(`DELETE: delete team by id ${req.params.id}`)
//   const team = teams.find((t, i) => {
//     if (t.id == req.params.id) {
//       teams.splice(i, 1);
//       return true;
//     }
//   });

//   if(team) res.json(team)
//   else next();
// })

// module.exports = router;