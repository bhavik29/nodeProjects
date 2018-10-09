console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

console.log("Command:",command)
console.log("Yargs", argv);

if(command === 'add'){
  var note = notes.addNote(argv.title, argv.body);
  if(typeof note === 'undefined'){
    console.log('No new note is created');
  }else{
    console.log(`Note created.\nTitle: ${note.title} \nBody: ${note.body}`);
  }
}else if(command === 'list'){
  notes.getAll();
}else if(command === 'remove'){
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? "Note Removed" : "Note not found";
  console.log(message);
}else if(command === 'read'){
  notes.readNote(argv.title);
}else{
  console.log('Command not recognised');
}
