const express = require("express");
const sequelize = require("./Database/db");
const Vehicle = require("./Database/model");
const Seeder = require("./Database/seeder");
const port = 3000;

sequelize.sync({ force: true }).then(() => {
  console.log("SQLite Database Connected");
  //Creates a few dummy entries in the database
  Seeder.create();
});

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hi! The data can be found at the /vehicles endpoint");
});

//endpoint with all of the data from the vehicles table
app.get("/vehicles", async (req, res) => {
  let data = await Vehicle.findAll();
  res.send(data);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
