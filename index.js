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

function hint(msg) {
  module.exports.stdout.write(chalk.dim(msg) + '\n');
}

function warn(msg) {
  module.exports.stdout.write(symbols.warning + '  ' + msg + '\n');
}

function node(msg) {
  if (process.platform === 'win32') {
    return success(msg);
  }
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
  hint,
  node,
  warn
};

