require("dotenv").config();
const express = require("express");
const moongoose = require("mongoose");
const cors = require("cors");

const notes = require("./routes/notes");
const app = express();
app.use(cors());
app.use(express.json());

moongoose.connect(
  process.env.DB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Database Connected");
  }
);
app.use("/notes", notes);
const port = process.env.PORT;
app.listen(port, () => {
  console.log("Running on port " + port);
});
