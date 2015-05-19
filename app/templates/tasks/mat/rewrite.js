var fs = require('fs')

function rewrite(maps) {
  return function *(next) {
    var app = this
    var path = this.request.path
    var map = maps.filter(function(map) {
      return map[0].test(path)
    })

    if (map.length) {
      app.request.path = path.replace(map[0][0], map[0][1])
    }

    yield next
  }
}

module.exports = rewrite
