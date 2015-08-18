var level = require('level-browserify'),
    sublevel = require('level-sublevel')

var sublevels = sublevel(level(__dirname + '/appdb')),
    testing = sublevels.sublevel('test')

module.exports = sublevels
