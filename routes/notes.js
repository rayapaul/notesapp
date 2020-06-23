const express = require("express");
const app = express();
const Note = require("../Models/NoteModel");

app.get("/all", async (req, res) => {
  const note1 = await Note.find({});
  res.send(note1);
});

app.post("/create", async (req, res) => {
  const newNote = new Note({
    notemsg: req.body.notemsg,
  });
  const response = await newNote.save();
  if (response) {
    res.send({
      success: true,
    });
  } else {
    res.send({
      success: false,
    });
  }
});
app.put("/update/:id", async (req, res) => {
  const newNote = await Note.updateOne(
    {
      _id: req.params.id,
    },
    req.body
  );
  if (newNote.n) {
    res.send({ success: true });
  } else {
    res.send({
      success: false,
    });
  }
});
app.delete("/remove", async (req, res) => {
  const newNote = await Note.deleteMany({});
  if (newNote.n) {
    res.send({ success: true });
  } else {
    res.send({
      success: false,
    });
  }
});

module.exports = app;
