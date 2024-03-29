const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: String,
  conference: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Conference",
  },
  captain: String,
  partner: String,
  location: String,
  wins: Number,
  loss: Number,
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

module.exports = mongoose.model("Team", teamSchema);
