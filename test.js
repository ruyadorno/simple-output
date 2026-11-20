const { Writable } = require('stream');
const t = require('tap');
const log = require('./index.js');

const snapshotAndPrint = msg => {
  t.matchSnapshot(msg);
  process.stdout.write(msg);
};

// replace log streams with a custom stream
// that will also make snapshots of each msg
log.stdout = new Writable();
log.stdout.write = snapshotAndPrint;
log.stderr = new Writable();
log.stderr.write = snapshotAndPrint;

process.env.FORCE_COLOR = 'true';
log.success('Success message');
log.error('Error message');
log.info('Info message');
log.warn('Warn message');
log.message('Simple message');
log.hint('Hint message');
log.node('Node message');

// test no icons version
process.env.SIMPLE_OUTPUT_NO_ICONS = 1;
log.success('Success message');
log.error('Error message');
log.info('Info message');
log.warn('Warn message');
log.message('Simple message');
log.hint('Hint message');
log.node('Node message');

// CI disables colors even on a color-capable terminal; pin TERM so this
// doesn't depend on the terminal running the tests (GitHub Actions has
// no TERM, so colors were already off and the CI check never ran)
process.env.TERM = 'xterm-256color';
process.env.FORCE_COLOR = undefined;
process.env.CI = 1;
log.success('Success message');
log.error('Error message');
log.info('Info message');
log.warn('Warn message');
log.message('Simple message');
log.hint('Hint message');
log.node('Node message');
