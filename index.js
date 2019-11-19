const symbols = require('log-symbols');
const chalk = require('chalk');


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

function node(msg) {
  const icon = '⬢';
  const matchOperatorsRegex = /[|\\{}()[\]^$+*?.-]/g;
  const node = chalk.green(
    icon.replace(matchOperatorsRegex, '\\$&')
  );
  module.exports.stdout.write(node + '  ' + msg + '\n');
}


// ---


module.exports = {
  stdout: process.stdout,
  stderr: process.stderr,
  success,
  error,
  info,
  message,
  node,
  warn
};

