const express = require('express')
const router = express.Router()
const conferences = require('../data/conferences')
// const form = document.getElementById('addNewForm')

// function toggleForm() {
//   form.toggleAttribute('hidden')
// }

// GET: read all conferences
router.get('/', (req, res) => {
  // res.send('GET: read all conferences')
  // res.json(confs)
  res.render('conferences/index', {conferences})
})

// POST: create new conference
router.post('/', (req, res, next) => {
  // res.send('POST: create new conference')
  if(req.body.name && req.body.description) {
    if (conferences.find((c) => c.name == req.body.name)) {
      res.json({ error: `Conference already exists: ${c.name}` })
      return
    }
    const newConf = {
      id: conferences[conferences.length - 1].id + 1,
      name: req.body.name,
      description: req.body.description
    }
    conferences.push(newConf)
    console.log(`Successful POST: ${newConf.id} ${newConf.name}`);
    // res.json(conferences[conferences.length - 1])
    res.render('conferences/index', {conferences})
  } else {
    res.json({ error: 'Insufficient Data'})
  }
})

// GET: read conference by id
router.get('/:id', (req, res) => {
  // res.send(`GET: read conference by id ${req.params.id}`)
  const conf = conferences.find((c) => c.id == req.params.id)
  if(conf) {
    res.json(conf)
    // res.render('conferences/conf', {conf});
  }
  else next();
})

// PATCH: update conferences by id
router.patch('/:id', (req, res) => {
  // res.send(`PATCH: update conference by id ${req.params.id}`)
  const conf = conferences.find((c, i) => {
    if (c.id == req.params.id) {
      for (const key in req.body) {
        conferences[i][key] = req.body[key];
      }
      return true;
    }
  });

  if(conf) res.json(conf)
  else next();
})

// DELETE: delete conference by id
router.delete('/:id', (req, res) => {
  // res.send(`DELETE: delete conference by id ${req.params.id}`)
  const conf = conferences.find((c, i) => {
    if (c.id == req.params.id) {
      conferences.splice(i, 1);
      return true;
    }
  });

  if(conf) res.json(conf)
  else next();
})

module.exports = router;