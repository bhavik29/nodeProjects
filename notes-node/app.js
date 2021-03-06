const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
}

const bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
}

const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleOptions
  })
  .command('remove', 'Remove a note', {
    title: titleOptions
  })
  .help()
  .argv;
var command = argv._[0];

var logNote = (note) => {
  console.log('---');
  console.log(`Title = ${note.title}`);
  console.log(`Body = ${note.body}`);
}

if(command === 'add'){
  var note = notes.addNote(argv.title, argv.body);
  if(typeof note === 'undefined'){
    console.log('No new note is created');
  }else{
    console.log('Note created!');
    logNote(note);
  }
}else if(command === 'list'){
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s)`);
  allNotes.forEach((note) => logNote(note));
}else if(command === 'remove'){
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? "Note Removed" : "Note not found";
  console.log(message);
}else if(command === 'read'){
  var note = notes.readNote(argv.title);

  if (typeof note === 'undefined') {
    console.log('No note found with the title');
  }else{
    console.log('Note Found!');
    logNote(note);
  }
}else{
  console.log('Command not recognised');
}
