const fs = require('fs');
const _ =require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOption = {
    describe: 'Title of note',
    demand:true,
    alias : 't'
  };

const bodyOption = {
  describe: 'Body of note',
  demand : true,
  alias : 'b'
};

var argv = yargs
          .command('add','Add a new note',{
            title:titleOption,
            body:bodyOption
          })
          .command('list','List all the notes')
          .command('read','Read a note',{
            title:titleOption
          })
          .command('remove','Remove anote',{
            title:titleOption
          })
          .help()
          .argv;
var command = argv._[0];
// console.log('Process argv',process.argv);
// console.log('Yarg argv',argv);


if(command == 'add'){
  var note = notes.addNote(argv.title,argv.body);
  if(note){
    console.log('Note saved')
    notes.logNote(note);
  }
  else {
    console.log('Note title taken');
  }
}
else if(command === 'list'){
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s)`);
  allNotes.forEach((note)=>notes.logNote(note));
}
else if(command === 'read'){
  var note = notes.getNote(argv.title);
  if(note){
    console.log('Reading note');
    notes.logNote(note);
  }
  else {
    console.log('Note not found');
  }
}
else if(command === 'remove'){
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved?'Note has been removed':'Note not found';
  console.log(message);
}
else{
  console.log('Couldn\'t understand the command');
}
