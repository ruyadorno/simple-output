var symbols = require('log-symbols');


// --


function success(msg) {
  process.stdout.write(symbols.success + '  ' + msg + '\n');
}

function error(msg) {
  process.stderr.write(symbols.error + '  ' + msg + '\n');
}

function info(msg) {
  process.stdout.write(symbols.info + '  ' + msg + '\n');
}

function message(msg) {
  process.stdout.write(msg + '\n');
}

function warn(msg) {
  process.stdout.write(symbols.warning + '  ' + msg + '\n');
}


// ---


module.exports = {
  success: success,
  error: error,
  info: info,
  message: message,
  warn: warn
};

