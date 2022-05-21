const Vehicle = require("./model");

const car = {
  create: async function() {
    await Vehicle.create({
      make: "Tesla",
      model: "Model X",
    });
    await Vehicle.create({
      make: "Ford",
      model: "Mustang",
    });
  }
}

module.exports = car;