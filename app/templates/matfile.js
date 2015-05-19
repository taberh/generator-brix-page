var mat = require('mat')
var rewrite = require('./tasks/mat/rewrite')
var send = require('./tasks/mat/send')

mat.task('default', function() {
  mat.use(rewrite([
      [/([^\.]+\.html)/, '/app/layouts/$1'],
      [/(bower_components)/, '/$1'],
      [/(.*)/, '/app/$1']
  ]))

  mat.use(send({
    root: __dirname
  }))
})
