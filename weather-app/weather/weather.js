const request = require('request');

var getWeather = (lat, long, callback)=> {
  request({
    url:`https://api.darksky.net/forecast/809128a18268282412c7fa51bcc74ee3/${lat},${long}`,
    json:true
  }, (error,response,body) =>{
    if(!error && response.statusCode ===200) {
      callback(undefined,{
        temperature : body.currently.temperature,
        apparentTemperature : body.currently.apparentTemperature
      });
    }
    else {
      callback('Unable to fetch forecast');
    }
  });
}

module.exports.getWeather = getWeather;
