# simple-output

[![NPM version](https://badge.fury.io/js/simple-output.svg)](https://npmjs.org/package/simple-output)
[![Build Status](https://travis-ci.org/ruyadorno/simple-output.svg?branch=master)](https://travis-ci.org/ruyadorno/simple-output)
[![License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://raw.githubusercontent.com/ruyadorno/simple-output/master/LICENSE)

Pretty output messages to stdout/stderr with no extra dependencies.

<div align="center">
	<br>
	<br>
	<img alt="render examples" width="350" src="https://user-images.githubusercontent.com/220900/150694210-7284e3fe-e713-42a4-98b9-f6d42dad9ac1.png">
	<br>
	<br>
</div>

## Getting Started
Install the module with: `npm install simple-output`

## Examples

```javascript
var log = require('simple-output');

log.success('Successful hello world');
```

## Available methods

- success(msg)
- info(msg)
- warn(msg)
- error(msg)
- node(msg) prints a green hexagon icon (on supported platforms) along with msg
- message(msg) prints msg, no icon associated with it
- hint(msg) useful if you want to dim some of the output

## Testing

This module helps on testing your output data by making it simpler to mock `simple-output` and its methods or use the exposed streams interface to which the data gets written to.

In order to test your output information, replace the stdout/stderr properties with an mock object containing a write function (simulating the streams api). See the example below:

### Mock simpleOutput.stdout

```javascript
var log = require('simple-output');
var myModule = require('../my-module');

log.stdout = {
    write: function(msg) {
        assert(msg, 'hello world');
    }
};

myModule.methodThatUsesSimpleLogInfoInternally();
```

### Using a mocking library

```javascript
var requireInject = require('require-inject');

var myModule = requireInject('../my-module', {
    'simple-output': {
        info: msg => assert(msg, 'hello world');
    }
});

myModule.methodThatUsesSimpleLogInfoInternally();
```

## License

[MIT](LICENSE) © 2022 [Ruy Adorno](http://ruyadorno.com)

