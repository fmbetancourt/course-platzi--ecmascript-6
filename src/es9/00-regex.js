// *********************************** REGEX *********************************** //

const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec('2012-03-05');
console.log(matchers);
console.table(matchers);