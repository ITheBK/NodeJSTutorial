//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} =require('mongodb'); //Destructring

var obj = new ObjectID();
console.log(obj);

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

  // db.collection('Todos').insertOne({
  //   text : 'Something to do 2',
  //   completed: false
  // } , (err, results) => {
  //     if(err) {
  //       return console.log('Unable to insert to do', err);
  //     }
  //     console.log(JSON.stringify(results.ops,undefined,2));
  // });

  // db.collection('Users').insertOne({
  //   name : 'Bharath',
  //   age  : 22,
  //   location : 'Bangalore'
  // }, (err,results) => {
  //   if(err){
  //     return console.log('Unable to insert to Users', err);
  //   }
  //   console.log(JSON.stringify(results.ops[0]._id.getTimestamp(),undefined,2));
  // });

  db.close();
});
