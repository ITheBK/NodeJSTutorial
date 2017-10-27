console.log('Starting app.js');

const fs = require('fs');
const _ =require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var argv = yargs.argv;
var command = argv._[0];
console.log('Command:',command);
// console.log('Process argv',process.argv);
// console.log('Yarg argv',argv);


if(command == 'add'){
  var note = notes.addNote(argv.title,argv.body);
  if(note){
    console.log('Note saved')
    console.log('-------');
    console.log(`Title:${note.title}`);
    console.log(`Body:${note.body}`);
  }
  else {
    console.log('Note title taken');
  }
}
else if(command === 'list'){
  notes.getAll();
}
else if(command === 'read'){
  var note = notes.getNote(argv.title);
  if(note){
    console.log('Reading note');
    console.log('-------');
    console.log(`Title:${note.title}`);
    console.log(`Body:${note.body}`);
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
