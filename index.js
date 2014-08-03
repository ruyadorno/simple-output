var symbols = require('log-symbols');


// --


function success(msg) {
  module.exports.stdout.write(symbols.success + '  ' + msg + '\n');
}

function error(msg) {
  module.exports.stderr.write(symbols.error + '  ' + msg + '\n');
}

function info(msg) {
  module.exports.stdout.write(symbols.info + '  ' + msg + '\n');
}

function message(msg) {
  module.exports.stdout.write(msg + '\n');
}

function warn(msg) {
  module.exports.stdout.write(symbols.warning + '  ' + msg + '\n');
}


// ---


module.exports = {
  stdout: process.stdout,
  stderr: process.stderr,
  success: success,
  error: error,
  info: info,
  message: message,
  warn: warn
};

