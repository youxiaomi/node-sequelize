/**
 * Created by you on 2017/7/15.
 */

var before_actions = require('./../bin/construct_fn/before_proxy.js')


function front(actions) {
  function before_action() {
    console.log('before')
  }
  // console.log(before_actions())
  return before_actions(actions, before_action)
}





module.exports = front