var send = require('koa-send')
var fs   = require('mz/fs')
var path = require('path')

module.exports = function(options) {
  return function *(next) {
    var url = path.join(options.root, this.request.path)
    if (yield send(this, url)) return
    yield next
  }
}
