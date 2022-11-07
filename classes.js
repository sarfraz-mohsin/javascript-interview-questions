//although there is nothing like classes in javascript, it's just the syntactical sugar to attract other coders to javascript

class Person {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }

  showDetails() {
    return this.name;
  }
}

//let person1 = new Person("sarfraz", 21);
//console.log(person1.showDetails());

//classical inhertance in javaScript just like cpp and java

class PersonChild extends Person {
  constructor() {
    super("sareen");
  }
}

let person1 = new PersonChild();
console.log(person1.showDetails());
