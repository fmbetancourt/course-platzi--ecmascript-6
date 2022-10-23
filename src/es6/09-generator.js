// *********************************** GENERATORS *********************************** //

function* iterate(array) {
  for (let value of array){
    yield value;
  }
}

const it = iterate(['Freddy','Rahydee','Lucia','Mildred']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
