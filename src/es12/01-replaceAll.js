// *********************************** REPLACEALL *********************************** //

const string = "Javascript es un maravilloso lenguaje de programación, con Javascript puedo crear el futuro de la web";

const replacedString1 = string.replace("Javascript", "Typescript");
console.log(replacedString1);

const replacedString2 = string.replaceAll("Javascript", "Typescript");
console.log(replacedString2);

const replacedString3 = string.replace(/a/, "+");
console.log(replacedString3);

const replacedString4 = string.replaceAll(/r/g, "*");
console.log(replacedString4);
