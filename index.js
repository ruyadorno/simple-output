const chalk = require('chalk');
const isWindows = () =>
  /* istanbul ignore next */
  (process.platform === 'win32' && process.env.TERM !== 'xterm-256color') ||
  process.env.SIMPLE_OUTPUT_NO_ICONS;


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
  const symbol = isWindows() ? chalk.green('*') : chalk.green('⬢');
  module.exports.stdout.write(`${symbol}  ${msg}\n`);
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

