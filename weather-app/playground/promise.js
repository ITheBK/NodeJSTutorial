var asyncAdd = (a,b)=>{
  return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(typeof a === 'number' && typeof b ==='number'){
          resolve(a + b);
        }
        else {
          reject('Arguemnts must be numbers');
        }
      },1500);
  });
}

asyncAdd(1,2).then((result)=>{
  console.log('Result:',result);
  return asyncAdd(result,33);
}).then( (result) => {
  console.log('Should be 4:',result);
}).catch((errorMessage) => {
  console.log(errorMessage);
});

// var somePromise = new Promise((resolve,reject) => {
//   setTimeout(()=>{
//
//       //One of those first action called only once
//       resolve('hey its worked!!');
//     //  reject('Unbale to fulfil promise');
//   },2500);
//
// });
//
// somePromise.then((message) => {
//   console.log('Success:',message);
// }, (errorMessage)=>{
//   console.log('Error:',errorMessage);
// });
//
//
// var newPromise =new Promise((resolve,reject) => {
//     setTimeout(()=>{
//       resolve({hello:'success'});
//     },0);
//     reject({hello:'reject'});
// });
//
// newPromise.then((message)=>{
//   console.log(message);
// },(errorMessage)=>{
//     console.log(errorMessage);
// });
