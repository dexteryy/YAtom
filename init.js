"use babel";

var shell = require('shell');

atom.commands.add('atom-text-editor', 'help:atom-docs', () => {
  shell.openExternal('https://atom.io/docs/');
});
