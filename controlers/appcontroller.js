/**
 * Created by squid on 17/1/12.
 */
var express = require('express');

var models={
    users:require('./../models/users.js'),
    test:require('./../models/test.js'),
}

// console.log(models.users)

var router = express.Router();

/* GET home page. */
router.use(function (req,res,next) {
    console.log('use')
    next()
})

require('./userscontroller.js')(router,models)






module.exports = router;