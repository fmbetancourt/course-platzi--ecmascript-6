// *********************************** FLAT AMP *********************************** //

// ? flat
const arrayExample =  [1,1,2,3,4, [1,3,5,6, [1,2,4]]];
console.log(arrayExample.flat(3));

// ? flatmap
const arrayExample2 = [1,2,3,4,5];
console.log(arrayExample2.flatMap(value => [value, value*2]));