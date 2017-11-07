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

  //deleteMany
  // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((results) => {
  //   console.log(results);
  // });

  // db.collection('Users').deleteMany({name:'Bharath'}).then((results) => {
  //   console.log('Name Bharath deleted from Users collection',results);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((results) => {
  //   console.log(results);
  // });
  db.collection('Users').deleteOne({_id:new ObjectID('5a0072fa7709916a52ad33ab')}).then((result) => {
    console.log(result);
  })

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed:true}).then((result) => {
  //   console.log(result);
  // });
  //db.close();
});
