// *********************************** FINALLY *********************************** //

const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Success!! 🥳');
    } else {
      reject('Ups!! 🥴');
    }
  })
}

anotherFunction()
  .then(response => console.log(response))
  .catch(err => console.log(err))
  .finally(() => console.log('Finally!'));
