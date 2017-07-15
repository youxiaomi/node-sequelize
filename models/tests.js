/**
 * Created by squid on 17/1/13.
 */
var Sequelize=require('./appmodels.js')


var User = function () {
    var sql= {
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
    return  Sequelize.mod('tests',sql)
}


module.exports=User()