console.log('Starting notes.js');

var addNote = (title, body) => {
  console.log('Adding Note', title, body);
};

var getAll = () => {
  console.log('Getting all notes');
};

var removeNote = (title) => {
  console.log('Remove note with title', title);
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
