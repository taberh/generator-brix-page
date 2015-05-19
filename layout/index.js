var generators = require('yeoman-generator')

module.exports = generators.NamedBase.extend({
  constructor: function() {
    generators.NamedBase.apply(this, arguments)
    this.create()
  },
  create: function() {
    this.template('layout.html', 'app/layouts/' + this.name + '.html')
    this.template('layout.js', 'app/layouts/' + this.name + '.js')
  }
})
