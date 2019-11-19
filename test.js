const assert = require('assert');
const log = require('./index.js');

function test({ check, expected: { stdio, message } }) {
    function setup () {
        log.stdout = log.stderr = {
            content: '',
            write(msg) {
                this.content += `${msg}`;
            }
        };
    }

    function teardown () {
        log.stdout = process.stdout;
        log.stderr = process.stderr;
    }

    setup();
    check();
    assert.ok(
        log[stdio].content.endsWith(`${message}\n`),
        `${stdio} should print ${message}`
    );
    teardown();
}

// test success msg
test({
    check: () => log.success('Success message'),
    expected: {
        stdio: 'stdout',
        message: 'Success message'
    }
});

// test error msg
test({
    check: () => log.success('Error message'),
    expected: {
        stdio: 'stderr',
        message: 'Error message'
    }
});

// test info msg
test({
    check: () => log.success('Info message'),
    expected: {
        stdio: 'stdout',
        message: 'Info message'
    }
});

// test warn msg
test({
    check: () => log.success('Warn message'),
    expected: {
        stdio: 'stdout',
        message: 'Warn message'
    }
});

// test simple msg
test({
    check: () => log.success('Simple message'),
    expected: {
        stdio: 'stdout',
        message: 'Simple message'
    }
});

// test node msg
test({
    check: () => log.node('Node message'),
    expected: {
        stdio: 'stdout',
        message: 'Node message'
    }
});

// Visual feedback, just print these to stdout
log.success('Success message');
log.error('Error message');
log.info('Info message');
log.warn('Warn message');
log.message('Simple message');
log.node('Node.js');

