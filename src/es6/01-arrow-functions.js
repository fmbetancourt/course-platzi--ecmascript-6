// ******************** ARROW FUNCTIONS (Funciones tipo flecha) ******************** //

// ? Before ES6
function square(num) {
  return num*num;
}

// ? After ES6
  // with code block
const square1 = (num) => {
  return num*num;
}
  // with implicit return
const square2 = num => num*num;

console.log(square(2));
console.log(square1(2));
console.log(square2(2));
