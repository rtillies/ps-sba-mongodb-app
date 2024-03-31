const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  date: String,
  homeTeam: {
    // type: mongoose.SchemaTypes.ObjectId,
    type: mongoose.SchemaTypes.String,
    ref: "Team",
    required: true,
    index: true,
  },
  awayTeam: {
    // type: mongoose.SchemaTypes.ObjectId,
    type: mongoose.SchemaTypes.String,
    ref: "Team",
    required: true,
    index: true,
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
    // type: mongoose.SchemaTypes.ObjectId,
    type: mongoose.SchemaTypes.String,
    ref: "Team",
    required: true,
    index: true,
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

gameSchema.statics.findByTeam = function(team) {
  return this.find({
    $or: [
      {homeTeam: new RegExp(team, 'i')},
      {awayTeam: new RegExp(team, 'i')},
    ]
  })
}

gameSchema.query.byTeam = function(team) {
  return this.where({
    $or: [
      {homeTeam: new RegExp(team, 'i')},
      {awayTeam: new RegExp(team, 'i')},
    ]
  })

}

gameSchema.pre('save', function(next) {
  this.updatedAt = Date.now()
  next()
}) 

gameSchema.methods.updateGame = function() {
  console.log(`Game ${this._id} updated.`);
}

module.exports = mongoose.model("Game", gameSchema);
