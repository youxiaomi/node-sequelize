/**
 * Created by squid on 17/1/12.
 */

var before_actions = require('./front_controller');

module.exports = function (router, models) {

  var actions = {
    index: function (req, res, next) {
      models.users.findAll().then(function (data) {
        res.json(data)
      })
    },
  }
  var new_actions = before_actions(actions)
  return new_actions
}