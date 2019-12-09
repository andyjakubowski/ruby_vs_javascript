function Greeter(name = 'World') {
  this.name = name;
}

Greeter.prototype.sayHi = function () {
  console.log(`Hi ${this.name}!`);
};

Greeter.prototype.sayBye = function () {
  console.log(`Bye ${this.name}, come back soon.`);
};

var greeter = new Greeter('Andy');
greeter.sayHi();
greeter.sayBye();
