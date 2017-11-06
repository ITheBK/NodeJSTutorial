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

  db.collection('Todos').find({completed:false}).toArray().then( (docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs,undefined,2));
  }, () => {
    console.log('Unable to fetch todos');
  });

  //db.close();
});
