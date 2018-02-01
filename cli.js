#!/usr/bin/env node

/* cli.js */
var color = require('colors');
var ask = require('node-ask');
var beep = require('./index.js');

var args = process.argv;

var count = args[2];
if (count)
  beep(count);
else {
  var question = {
    name: 'count',
    type: 'input',
    message: 'How many beeps do you want?'.blue;
  }

  ask.propmt(question)
}
