console.log('Starting app');

setTimeout(() => {
  console.log('Inside a callback');
},2000);

setTimeout(() =>{
  console.log('Inside 0 miliseconds callback');
},0);

console.log('Finishing up')
