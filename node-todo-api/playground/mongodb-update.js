//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} =require('mongodb'); //Destructring


var user = {
  name : 'Raajesh',
  age:1212
};

var {name} = user;
console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB Server');

//   db.collection('Todos').findOneAndUpdate({
//     _id : new ObjectID('5a0193207629e22b3a54029b')
//   },{
//     $set: {
//       completed:true
//     }
//   },{
//     returnOriginal:fasle
//   }
//   ).then((result) => {
//   console.log(result);
// });


  db.collection('Users').findOneAndUpdate({
    _id:new ObjectID('5a019e957629e22b3a5406b1')
  },{
    $inc:{
      age:1
    },
    $set:{
      name:'Bharath'
    }
  },{
    returnOriginal:false
    }).then((result) => {
    console.log(result);
  })

  //db.close;
});
