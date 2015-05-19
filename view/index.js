var generators = require('yeoman-generator')

module.exports = generators.NamedBase.extend({
  constructor: function() {
    generators.NamedBase.apply(this, arguments)
    this.tpl = function(that) {
      return that.name.split('/').pop()
    }(this)
    this.create()
  },
  create: function() {
    this.template('view.js', 'app/views/' + this.name + '.js')
    this.template('view.tpl.js', 'app/views/' + this.name + '.tpl.js')
  }
})
