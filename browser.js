var multilevel = require('multilevel')
    shoe = require('shoe')
    manifest = require('./manifest.json')
    db = multilevel.client(manifest)

var stream = shoe('/dbase')
stream.pipe(db.createRpcStream()).pipe(stream)
window.db = db
db.sublevels.cc.put('prueba', 'Funcara?', function (err, data) {if (err) console.log(err); console.log(data + ' Funca!')})
