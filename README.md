# simple-output

version: 1.0.1

[![Build Status](https://travis-ci.org/ruyadorno/simple-output.svg?branch=master)](https://travis-ci.org/ruyadorno/simple-output)

Output messages to stdout/stderr

## Getting Started
Install the module with: `npm install simple-output`

## Examples

```javascript
var log = require('simple-output');

log.success('Successful hello world');
```

## Available methods

- success(msg)
- error(msg)
- info(msg)
- message(msg)
- warn(msg)

## Testing

This module helps on testing your output data by exposing the streams to which the data gets written to.

In order to test your output information, replace the stdout/stderr properties with an mock object containing a write function. See the example below:

```javascript
var log = require('simple-output');

log.stdout = {
    write: function(msg) {
        assert(msg, 'hello world');
    }
};

log.message('hello world');
```

## License
Copyright (c) 2014 Ruy Adorno. Licensed under the MIT license.

