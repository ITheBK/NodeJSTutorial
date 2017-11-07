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

  // db.collection('Todos').find({
  //   _id:new ObjectID('5a0071cd485c8a699b71a986')
  // }).toArray().then( (docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // }, (err) => {
  //   console.log('Unable to fetch the todo');
  // })

  // db.collection('Todos').find().count().then( (count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch the todo',err);
  // })

  db.collection('Users').find({name:'Bharath'}).count().then( (count) => {
    console.log(`Name with Bharath counts: ${count}`);
    return db.collection('Users').find({name:'Bharath'}).toArray();
  }, (err) => {
    console.log('Error while fetching the data from Bharath\'c collections',err);
  }).then((docs) => {
    console.log('All the Users item of Name bharath:');
    console.log(JSON.stringify(docs,undefined,2));
  });

  //db.close();
});
