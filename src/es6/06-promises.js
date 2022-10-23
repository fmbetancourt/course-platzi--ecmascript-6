// *********************************** PROMISES *********************************** //

const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve('Success!! 🥳');
    } else {
      reject('Ups!! 🥴');
    }
  })
}

anotherFunction()
  .then(response => console.log(response))
  .catch(err => console.log(err));
