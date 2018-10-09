console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
  try{
    var noteString = fs.readFileSync('notes-data.json');
    return JSON.parse(noteString);
  }catch (e){
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  var duplicateNotes = notes.filter((note) => note.title === title);

  if(duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note;
  }else{

  }
};

var getAll = () => {
  console.log('Getting all notes');
};

var removeNote = (title) => {
  var notes = fetchNotes();
  var notesToRetain = notes.filter((note) => note.title !== title);
  saveNotes(notesToRetain);

  if(notes.length !== notesToRetain.length){
    return true;
  }else{
    return false;
  }
};

var readNote = (title) => {
  console.log('Reading note with title', title);
}

module.exports = {
  addNote,
  getAll,
  removeNote,
  readNote
};
