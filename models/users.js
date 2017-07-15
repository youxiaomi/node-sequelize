/**
 * Created by squid on 17/1/10.
 */
var Sequelize = require('./appmodels.js')


var User = function () {
  var sql = {
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    testName: {
      type: Sequelize.STRING
    }
  }
  // console.log(Sequelize)
  // console.log(Sequelize)
  return Sequelize.mod('users', sql)
}


module.exports = User()