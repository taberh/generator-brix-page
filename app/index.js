var generators = require('yeoman-generator')

module.exports = generators.NamedBase.extend({
  constructor: function() {
    generators.NamedBase.apply(this, arguments)
    this.Name = function(that) {
        var Name = that._.camelize(that.name)
        return Name.substring(0, 1).toUpperCase() + Name.substring(1, Name.length)
    }(this)

    this.createProject()

    this.hookFor('brix-page:layout')

    this.on('end', function() {
      this.spawnCommand('bower', ['install'])
      this.spawnCommand('npm', ['install'])
    })
  },
  createProject: function() {
    this.mkdir('app')
    this.mkdir('app/helper')
    this.mkdir('app/layouts')
    this.mkdir('app/models')
    this.mkdir('app/views')
    this.template('bower.json', 'bower.json')
    this.template('package.json', 'package.json')
    this.copy('gulpfile.js', 'gulpfile.js')
    this.copy('matfile.js', 'matfile.js')
    this.copy('gitignore', '.gitignore')
    this.copy('jshintrc', '.jshintrc')
    this.copy('app/config.js', 'app/config.js')
    this.copy('tasks/mat/rewrite.js', 'tasks/mat/rewrite.js')
    this.copy('tasks/mat/send.js', 'tasks/mat/send.js')
    this.template('README.md', 'README.md')
  }
})
