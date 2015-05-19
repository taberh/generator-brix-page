/* global require, document */
require(
  [
    'brix/loader',
    'brix/event',
    'jquery'
  ], function(
    Loader,
    EventManager,
    $
  ) {
    // use brix/event manage event bind
    // ref: https://github.com/thx/brix-event
    /*var manager = new EventManager()
    var listeners = {
      foo: function(event, arg) {
      }
    }
    manager.delegate(document.body, listeners)*/

    // use brix/loader manage components
    // ref: https://github.com/thx/brix-loader
    /*Loader.load(document.body, function() {
    }, function() {
    }))*/
  }
)
