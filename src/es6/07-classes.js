// *********************************** CLASSES *********************************** //

// Declaración de clase
class UserBase {}

// Instanciación de clase
const newUserBase = new UserBase();

class User {
  // Métodos
  gretting() {
    return 'Hello!';
  }
}

const user = new User();
console.log(user.gretting());

const bebeloper = new User();
console.log(bebeloper.gretting());


// ? Constructor

class User2 {
  // constructor
  constructor() {
    console.log('Nuevo usuario');
  }

  // Métodos
  gretting() {
    return 'Hello!';
  }
}

const freddy = new User2();

// ? This
class User3 {
  // constructor
  constructor(name) {
    this.name = name;
    console.log(`Nuevo usuario 3: ${this.name}`);
  }

  // Métodos
  speak() {
    return 'Hello';
  }

  gretting() {
    return `${this.speak()} ${this.name}!!`;
  }
}

const rahydee = new User3('Rahydee');
console.log(rahydee.gretting());

// ? Setters & Getters
class User4{
  // constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
    console.log(`Nuevo usuario 4: ${this.name}`);
  }

  // Métodos
  speak() {
    return 'Hello';
  }

  gretting() {
    return `${this.speak()} ${this.name}!!`;
  }

  get uAge() {
    return this.age;
  }

  set uAge(n) {
    this.age = n;
  }
}

const lucia = new User4('Lucia', 11);
console.log(lucia.uAge);
lucia.uAge = 12;
console.log(lucia.uAge);