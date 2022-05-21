const { Model, DataTypes } = require("sequelize");
const sequelize = require("./db");

const Vehicle = sequelize.define(
  "vehicle",
  {
    // Model attributes are defined here
    //id, createdAt and updatedAt are not here as they are added automatically by Sequelize
    make: {
      type: DataTypes.STRING,
    },
    model: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "vehicles",
  }
);

module.exports = Vehicle;