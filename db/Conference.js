const mongoose = require("mongoose");

const conferenceSchema = new mongoose.Schema({
  name: String,
  description: Number,
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});

module.exports = mongoose.model("Conference", conferenceSchema);
