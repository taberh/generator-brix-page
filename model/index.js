var generators = require('yeoman-generator')

module.exports = generators.NamedBase.extend({
  constructor: function() {
    generators.NamedBase.apply(this, arguments)
    this.create()
  },
  create: function() {
    this.template('model.js', 'app/models/' + this.name + '.js')
  }
})
