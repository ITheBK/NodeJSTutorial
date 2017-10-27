// var obj={
//   name:"Bharath"
// };
//
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name":"Bharath","age":25}';
// var personObj = JSON.parse(personString);
// console.log(typeof personObj);
// console.log(personObj);

const fs =require('fs');

var originalNote = {
title: 'Some title',
body : 'Some body'
}

var originialNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json',originialNoteString);

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);

console.log(typeof note);
console.log("Title:",note.title);
console.log("Body:",note.body);
