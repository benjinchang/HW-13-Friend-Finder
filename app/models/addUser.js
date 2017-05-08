// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

var userData = sequelize.define("friendslist", {
  name: {
    type: Sequelize.STRING
  },
  photo_link: {
    type: Sequelize.STRING
  },
  q1: {
    type: Sequelize.INTEGER
  },
  q2: {
    type: Sequelize.INTEGER
  },
  q3: {
    type: Sequelize.INTEGER
  },
  q4: {
    type: Sequelize.INTEGER
  },
  q5: {
    type: Sequelize.INTEGER
  },
  q6: {
    type: Sequelize.INTEGER
  },
  q7: {
    type: Sequelize.INTEGER
  },
  q8: {
    type: Sequelize.INTEGER
  },
  q9: {
    type: Sequelize.INTEGER
  },
  q10: {
    type: Sequelize.INTEGER
  }
  }, {
    freezeTableName: true
});

userData.sync();

module.exports = userData;