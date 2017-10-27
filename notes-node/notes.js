console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = ()=>{
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
}

var saveNote = (notes) =>{
  fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}

var addNote = (title,body) =>{
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var duplicateNotes = notes.filter((note)=>note.title === title);

  if(duplicateNotes.length==0){
    notes.push(note);
    saveNote(notes);
    return note;
  }

};

var getAll = () =>{
  console.log('Getting all notes');
};

var getNoteInternal =(title)=>{
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) =>{
    if(note.title === title) return note;
  });
  //return readNote;
}

var removeNote = (title)=>{
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note)=>note.title !==title);
  saveNote(filteredNotes);
  return notes.length !== filteredNotes.length;
}

//If property==value, we can remove value
// Like getAll:getAll => so removed value here
module.exports={
  addNote,
  getAll,
  getNote:getNoteInternal,
  removeNote
};
