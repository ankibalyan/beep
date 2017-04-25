#!/usr/bin/env node

/* cli.js */

var beep = require('./index.js');

var args = process.argv;

var count = args[2];
if (count)
  beep(count);
else {
  
}
