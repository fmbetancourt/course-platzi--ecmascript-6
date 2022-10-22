// *********************************** DEFAULT PARAMS *********************************** //

// ? Before ES6
function newUser(name, age, country) {
  var name = name || 'Oscar';
  var age = age || 34;
  var country = country || 'MX';
  console.log(name, age, country);
}
newUser();
newUser('Freddy', 39, 'VE');

// ? After ES6
function newAdmin(name = 'Oscar', age = 34, country = 'MX') {
  console.log(name, age, country);
}
newAdmin();
newAdmin('Freddy', 39, 'VE');