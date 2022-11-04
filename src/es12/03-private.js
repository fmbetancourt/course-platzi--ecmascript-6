// *********************************** CLASSES *********************************** //

// ? Setters & Getters
class User{
  // constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
    console.log(`Nuevo usuario: ${this.name}`);
  }

  // Métodos
  #speak() {
    return 'Hello';
  }

  gretting() {
    return `${this.#speak()} ${this.name}!!`;
  }

  get #uAge() {
    return this.age;
  }

  set #uAge(n) {
    this.age = n;
  }
}

const lucia = new User('Lucia', 10);
console.log(lucia.uAge);
console.log(lucia.gretting());
console.log(lucia.uAge = 11);