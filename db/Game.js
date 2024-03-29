const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  date: new Date(),
  homeTeam: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Team",
  },
  awayTeam: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Team",
    required: true,
  },
  homeScore: {
    type: Number,
    required: true,
  },
  awayScore: {
    type: Number,
    required: true,
  },
  winner: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Team",
    required: true,
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
})

module.exports = mongoose.model("Game", gameSchema);
