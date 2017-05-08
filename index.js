var exec = require('child_process').exec

module.exports = function (cb) {
  exec(__dirname + '/bin/cli', function (er) {
    if (er) return cb(er)
    cb(null)
  })
}
