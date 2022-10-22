// *********************************** OBJECT LITERALS *********************************** //

function newUser(user, age, country, uId) {
  return {
    user,
    age,
    country,
    id: uId
  }
}

console.log(newUser('Freddy', 39, 'VE', 11));
