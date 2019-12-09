const Greeter = {
  init(name = 'World') {
    this.name = name;
    return this;
  },

  sayHi() {
    console.log(`Hi ${this.name}!`);
  },

  sayBye() {
    console.log(`Bye ${this.name}, come back soon.`);
  },
};

const greeter = Object.create(Greeter).init('Andy');
greeter.sayHi();
greeter.sayBye();
