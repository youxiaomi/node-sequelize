/**
 * Created by you on 2017/7/15.
 */

module.exports=function (actions, before_action) {
  var new_actions = {}
  if(!before_action){
    var before_action =function () {}
  }
  for(var fn in actions){
    var fn_self = actions[fn]
    var new_action = new Proxy(fn_self , {
      apply: function(target, thisArg, argumentsList) {
        before_action()
        target(argumentsList[0],argumentsList[1],argumentsList[2])
      }
    });
    new_actions[fn] = new_action
  }
  return new_actions
}
