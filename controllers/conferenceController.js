const asyncHandler = require('express-async-handler');
const Conference = require('../db/Conference')

const getConferences = (req, res) => {
  res.status(200).json({message: 'Get Conferences'})
}

const setConference = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error('Please add name field');
  }
  const conf = await Conference.create({
    name: req.body.name,
    description: req.body.description,
  });
  res.status(200).json(conf);

// res.status(200).json({message: 'Set Conference'})
})

const getConferenceByName = (req, res) => {
  res.status(200).json({message: `Get ${req.params.name} Conference`})
}

const updateConference = (req, res) => {
  res.status(200).json({message: `Update ${req.params.name} Conference`})
}

const deleteConference = (req, res) => {
  res.status(200).json({message: `Delete ${req.params.name} Conference`})
}

module.exports = {
  getConferences,
  setConference,
  getConferenceByName,
  updateConference,
  deleteConference,
}