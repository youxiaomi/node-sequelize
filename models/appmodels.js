/**
 * Created by squid on 17/1/10.
 */
var Sequelize=require('sequelize')
var sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },

    // SQLite only
    storage: './db/test.db'
});
sequelize
    .authenticate()
    .then(function(err) {
        console.log('Connection has been established successfully.');
    })
    .catch(function (err) {
        console.log('Unable to connect to the database:', err);
    });
// return
console.log('seeeqq')
var  appmodels=function () {
    // this.aa=function () {
    //     console.log(Sequelize)
    // }
    Sequelize.mod=function (model,sql) {
        var modelname=sequelize.define(model,sql
            // {
            //     firstName: {
            //         type: Sequelize.STRING
            //     },
            //     lastName: {
            //         type: Sequelize.STRING
            //     },
            //     testName: {
            //         type: Sequelize.STRING
            //     }
            // }
        )
        modelname.sync({force: true}).then(function () {
            // 已创建数据表
            // modelname.create({
            //     // firstName: 'squid',
            //     // lastName: 'Hancock'
            // });

            // User.findAll().then(function (data) {
            //     // console.log(data)
            // });

        });
        return modelname
    }
    return Sequelize
}

module.exports=appmodels()