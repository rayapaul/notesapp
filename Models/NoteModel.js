const mongoose = require("mongoose");

const NoteSchema = mongoose.Schema({
  notemsg: {
    type: String,
    required: true,
  },
  // username: {
  //   type: String,
  //   required: true,
  // },
  date: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("Note", NoteSchema);
