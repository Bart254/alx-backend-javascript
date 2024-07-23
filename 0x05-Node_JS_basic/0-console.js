#!/usr/bin/env node
// node script for printing to stdout
function displayMessage(mess) {
  process.stdout.write(`${mess}\n`);
}

module.exports = displayMessage;
