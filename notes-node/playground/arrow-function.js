var square = x => x*x;
console.log(square(9));

var user = {
  name : 'Bharath',
  sayHi :() => {
    console.log(`Hello ${this.name}`);
  },
  sayHiAlt () {
      console.log(arguments);
      console.log(`Hello ${this.name}`);
  }
};

//Use normal function for using this.
//arrow function not binds this
user.sayHi();
user.sayHiAlt(1,1,1);
