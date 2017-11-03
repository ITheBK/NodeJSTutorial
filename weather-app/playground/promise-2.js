//geocode using promise
const request = require('request');

var geocodeAddress = (address)=>{
  return new Promise((resolve,reject) =>{
      var encodedAddress = encodeURIComponent(address);
      request({
        url :`http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json:true
      },(error,response,body) =>{
        if(error){
          reject('Unable to connect to google server')
        }
        else if(body.status ==='ZERO_RESULTS'){
          reject('Unable to find that address');
        }
        else if(body.status ==='OK'){
          resolve({
            address:body.results[0].formatted_address,
            latitude:body.results[0].geometry.location.lat,
            longitude:body.results[0].geometry.location.lng

          });
        }
        else{
            reject('Undefined error');
        }
      });
  });

};

geocodeAddress('576224').then( (result)=> {
    console.log(JSON.stringify(result,undefined,2));
}, (errorMessage) =>{
    console.log(errorMessage);
});
