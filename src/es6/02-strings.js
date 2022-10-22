// *********************************** STRINGS *********************************** //

let hello = 'Hello';
let world = 'World';

// ? Before ES6
let epicPhrase1 = hello + ' ' + world + '!!';
console.log(epicPhrase1);

// ? After ES6
// Template Literals
let epicPhrase2 = `${hello} ${world}!!`;
console.log(epicPhrase1);

// Multi-line strings
let lorem1 = 'esto es un string \n' + 'esto es otra linea';
let lorem2 = `esta es una frase épica
la continuación de esta frase épica
`;
console.log(lorem1);
console.log(lorem2);