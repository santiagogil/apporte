var level = require('level-browserify')
    multilevel = require('multilevel')

var db = multilevel.server(level(__dirname + '/appdb'))
multilevel.writeManifest(db, __dirname + '/manifest.json')
module.exports = db
