console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ =require('lodash');
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

console.log(_.isString(true));
console.log(_.isString('Bharath'));

//var filteredArray = _.uniq(['Bharath',4,2,3,1,'Bharath']);
//console.log(filteredArray);
