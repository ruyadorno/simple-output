const chalk = require('chalk');
const isWindows = () =>
  process.platform === 'win32' || process.env.SIMPLE_OUTPUT_NO_ICONS;


// --


function success(msg) {
  const symbol = isWindows() ? chalk.green('√') : chalk.green('✔');
  module.exports.stdout.write(`${symbol}  ${msg}\n`);
}

function error(msg) {
  const symbol = isWindows() ? chalk.red('×') : chalk.red('✖');
  module.exports.stderr.write(`${symbol}  ${msg}\n`);
}

function info(msg) {
  const symbol = isWindows() ? chalk.blue('i') : chalk.blue('ℹ');
  module.exports.stdout.write(`${symbol}  ${msg}\n`);
}

function message(msg) {
  module.exports.stdout.write(`${msg}\n`);
}

function hint(msg) {
  module.exports.stdout.write(`${chalk.dim(msg)}\n`);
}

function warn(msg) {
  const symbol = isWindows() ? chalk.yellow('‼') : chalk.yellow('⚠');
  module.exports.stdout.write(`${symbol}  ${msg}\n`);
}

function node(msg) {
  /* istanbul ignore next */
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

