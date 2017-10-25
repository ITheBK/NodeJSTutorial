console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

// var user = os.userInfo();
//
//
//
// fs.appendFile('greeting.txt',`Hello ${user.username}! You are ${notes.age}`,function(err){
//   if(err){
//   console.log('error occur');
// }
//
// });

// var res = notes.addNote();
// console.log(res);


console.log('Result:',notes.add(2,-3));
