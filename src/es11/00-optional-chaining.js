// *********************************** OPTIONAL CHAINING *********************************** //

const users = {
  fmbetancourt : {
    country: 'VE'
  },
  rahydee : {
    country: 'CL'
  }
}

console.log(users.fmbetancourt.country);
console.log(users.fmbetancourt.age);
console.log(users?.lucia?.country);