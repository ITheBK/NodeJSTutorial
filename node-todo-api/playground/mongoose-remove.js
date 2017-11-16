  const{ObjectID} = require('mongodb');
  const {mongoose} = require('./../server/db/mongoose');
  const {Todo} = require('./../server/models/todos');
  const {User} = require('./../server/models/users');

  // Todo.remove({}).then((results) => {
  //   console.log(results);
  // });

  //Todo.findOneAndRemove
  //Todo.findByIdAndRemove
  Todo.findByIdAndRemove({_id:'5a03f432f12fac68f517215d'}).then((todo) => {
    console.log(todo);
  });

  Todo.findByIdAndRemove('5a03f432f12fac68f517215d').then((todo) => {
    console.log(todo);
  });
