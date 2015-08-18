var multilevel = require('multilevel')
    sublevels = require('./sublevels')

var db = multilevel.server(sublevels)
multilevel.writeManifest(sublevels, __dirname + '/manifest.json')
module.exports = db
