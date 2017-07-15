/**
 * Created by squid on 17/1/12.
 */
var fs = require("fs")
var express = require('express');
var modele_dirs = fs.readdirSync('models');
var models = { }
var reg = /[a-z]+(?=.)/
modele_dirs.map(function (dir) {
  var model_name = reg.exec(dir)
  if(model_name &&　dir != 'appmodels.js'){
    models[model_name] = require('./../models/'+dir);
  }
})

// console.log(models.users)

var router = express.Router();

/* GET home page. */
router.use(function (req, res, next) {
  console.log('use')
  next()
})

var routers = require('./../routes/router.js')()

for(var r in  routers){
  var r_self = routers[r]
  var r_f = require('./'+r_self[1]+'_controller.js')(router, models)
  if(r_self[0] == 'get'){
    router.get(r,r_f[r_self[2]]);
  }
}


module.exports = router;