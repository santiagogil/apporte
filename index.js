var shoe = require('shoe')
    http = require('http')
    ecstatic = require('ecstatic')(__dirname)
    db = require('./db')

var sock = shoe(function (stream) {
  stream.pipe(db).pipe(stream)
})

var server = http.createServer(ecstatic)
server.listen(9999)

sock.install(server, '/dbase')
