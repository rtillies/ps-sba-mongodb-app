const getConferences = (req, res) => {
  res.status(200).json({message: 'Get Conferences'})
}

const setConference = (req, res) => {
  res.status(200).json({message: 'Set Conference'})
}

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