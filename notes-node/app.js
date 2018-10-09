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
  var note = notes.readNote(argv.title);

  if (typeof note === 'undefined') {
    console.log('No note found with the title');
  }else{
    console.log(`Note Found!\nTitle: ${note[0].title}\nBody: ${note[0].body}`);
  }
}else{
  console.log('Command not recognised');
}
