class Greeter {
  constructor(name = 'World') {
    this.name = name;
  }

  sayHi() {
    console.log(`Hi ${this.name}!`);
  }

  sayBye() {
    console.log(`Bye ${this.name}, come back soon.`);
  }
}

const greeter = new Greeter('Andy');
greeter.sayHi();
greeter.sayBye();
