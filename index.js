/* istanbul ignore next */
const isWindows = () =>
  (process.platform === 'win32' && process.env.TERM !== 'xterm-256color') ||
  process.env.SIMPLE_OUTPUT_NO_ICONS;

/* istanbul ignore next */
const hasBasicColorSupport = () => (
  /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(
    process.env.TERM) || process.env.COLORTERM
);

const colors = () =>
  process.env.FORCE_COLOR === 'true' ||
  (hasBasicColorSupport() && !process.env.CI);


// --


function success(msg) {
  const symbol = isWindows() ? '√' : '✔';
  const prefix = colors() ? `[32m${symbol}[39m` : symbol;
  module.exports.stdout.write(`${prefix}  ${msg}\n`);
}

function info(msg) {
  const symbol = isWindows() ? 'i' : 'ℹ';
  const prefix = colors() ? `[34m${symbol}[39m` : symbol;
  module.exports.stdout.write(`${prefix}  ${msg}\n`);
}

function warn(msg) {
  const symbol = isWindows() ? '‼' : '⚠';
  const prefix = colors() ? `[33m${symbol}[39m` : symbol;
  module.exports.stdout.write(`${prefix}  ${msg}\n`);
}

function error(msg) {
  const symbol = isWindows() ? '×' : '✖';
  const prefix = colors() ? `[31m${symbol}[39m` : symbol;
  module.exports.stderr.write(`${prefix}  ${msg}\n`);
}

function node(msg) {
  const symbol = isWindows() ? '*' : '⬢';
  const prefix = colors() ? `[32m${symbol}[39m` : symbol;
  module.exports.stdout.write(`${prefix}  ${msg}\n`);
}

function message(msg) {
  module.exports.stdout.write(`${msg}\n`);
}

function hint(msg) {
  const styledMsg = colors() ? `[2m${msg}[22m` : msg;
  module.exports.stdout.write(`${styledMsg}\n`);
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

