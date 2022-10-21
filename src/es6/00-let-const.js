// *********************************** LET y CONST *********************************** //

var lastName = 'David';
lastName = 'Oscar';
console.log(lastName);

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

const animal = 'Dog';
// Attempt to assign to const or readonly variable
// animal = 'Cat';
console.log(animal);

const fruits = () => {
  if (true) {
    var fruit1 = 'Apple';    // function scope
    let fruit2 = 'Kiwi';     // block scope
    const fruit3 = 'Banana'; // block scope
  }

  console.log(fruit1);
  // fruit2 is not defined
  // console.log(fruit2);
  // fruit3 is not defined
  // console.log(fruit3);
}

fruits();
