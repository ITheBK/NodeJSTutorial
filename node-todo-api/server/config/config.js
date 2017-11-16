  var env = process.env.NODE_ENV || 'development';
  console.log('Env::::::::::',env);

  //Mongo from mlab :
  /*
  >heroku config:set MONGODB_URI="mongodb://ithebk:password@ds251845.mlab.com:51845/todo-app"
  **/
  if(env === 'development' || env === 'test') {
    var config = require('./config.json');
    var envConfig = config[env];

    Object.keys(envConfig).forEach((key) => {
      process.env[key] = envConfig[key];
    });

  }
