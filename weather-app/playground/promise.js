var somePromise = new Promise((resolve,reject) => {
  setTimeout(()=>{

      //One of those first action called only once
      resolve('hey its worked!!');
    //  reject('Unbale to fulfil promise');
  },2500);

});

somePromise.then((message) => {
  console.log('Success:',message);
}, (errorMessage)=>{
  console.log('Error:',errorMessage);
});


var newPromise =new Promise((resolve,reject) => {
    setTimeout(()=>{
      resolve({hello:'success'});
    },0);
    reject({hello:'reject'});
});

newPromise.then((message)=>{
  console.log(message);
},(errorMessage)=>{
    console.log(errorMessage);
});
