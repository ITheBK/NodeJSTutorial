console.log('Starting app.');

const fs = require('fs');
const os = require('os');

var user = os.userInfo();



fs.appendFile('greeting.txt',`Hello ${user.username}!`,function(err){
  if(err){
  console.log('error occur');
}

});
