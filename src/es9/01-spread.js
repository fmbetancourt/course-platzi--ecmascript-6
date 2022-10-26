// *********************************** SPREAD *********************************** //

const user = {
  username: 'Rahydee',
  age: 35,
  country: 'CL',
}

const { username, ...values } = user;
console.log(username);
console.log(values);