const express = require('express')
const router = express.Router()

// GET: read all teams
router.get('/', (req, res) => {
  res.send('GET: read all teams')
})

// POST: create new team
router.post('/', (req, res) => {
  res.send('POST: create new team')
})

// GET: read team by id
router.get('/:id', (req, res) => {
  res.send(`GET: read team by id ${req.params.id}`)
})

// PATCH: update team by id
router.patch('/:id', (req, res) => {
  res.send(`PATCH: update team by id ${req.params.id}`)
})

// DELETE: delete team by id
router.get('/:id', (req, res) => {
  res.send(`DELETE: delete team by id ${req.params.id}`)
})

module.exports = router;