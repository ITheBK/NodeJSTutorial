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
  return fetchNotes();
};

var getNoteInternal =(title)=>{
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) =>note.title === title);
  return filteredNotes[0];
}

var removeNote = (title)=>{
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note)=>note.title !==title);
  saveNote(filteredNotes);
  return notes.length !== filteredNotes.length;
}

var logNote = (note) =>{
  debugger;
  console.log('-------');
  console.log(`Title:${note.title}`);
  console.log(`Body:${note.body}`);
}

//If property==value, we can remove value
// Like getAll:getAll => so removed value here
module.exports={
  addNote,
  getAll,
  getNote:getNoteInternal,
  removeNote,
  logNote
};
