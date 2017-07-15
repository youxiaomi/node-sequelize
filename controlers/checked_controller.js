/**
 * Created by you on 2017/7/15.
 */


var before_actions = require('./front_controller');

module.exports = function (router, models) {

  var actions = {
    index: function (req, res, next) {
     
      
      
    },
  }
  var new_actions = before_actions(actions)
  return new_actions
}