// Number array
// const originalTestResults = [1, 5.3, 1.5, 10.99, -5, 10];

// console.log(originalTestResults.indexOf(5.3));
// console.log(originalTestResults.indexOf(1.5));

//  number array  (primitive datatype)
const originalTestResults2 = [1, 5.3, 1.5, 10.99, 1.5, -5, 10, 1.5];

// -------------------------------------
// indexOf
// -------------------------------------
// here fromIndex parameter is 0 as we have not passed second parameter
console.log(originalTestResults2.indexOf(1.5));

// here fromIndex parameter is 3
console.log(originalTestResults2.indexOf(1.5, 3));

// here fromIndex parameter is last index of array as we have not passed second parameter
console.log(originalTestResults2.lastIndexOf(1.5));

//  object
const personData = [{ name: 'Koushik' }, { name: 'Soumitra' }];
console.log(personData);
console.log(personData.indexOf({ name: 'Soumitra' }));

// -------------------------------------
// find
// -------------------------------------
//  Way1: Using all 3 parameters
// const findName = personData.find((person, idx, persons) => {
//   //   return person.name === 'Soumitra';

//   below will return undefined. (SInce there is no Surya in Array object)
//   return person.name === 'Surya';
// });

// Way 2:
// Shortcut using only one parameter
// const findName = personData.find((person) => {
//   return person.name === 'Soumitra';

//   //   below will return undefined. (SInce there is no Surya in Array object)
//   //   return person.name === 'Surya';
// });

// Way 3:
//  shortcut using function expression
// const personDetails = personData.find((person) => person.name === 'Soumitra');
const personDetails = personData.find((person) => person.name === 'Koushik');

personDetails.name = 'Debajit';

console.log(personDetails, personData);

// shortcut
console.log(
  (personData.find((person) => person.name === 'Debajit').name = 'Anay'),
  personData
);

// -------------------------------------
// findIndex
// -------------------------------------
// const maxIndex = personData.findIndex((person, idx, persons) => {
//   //   return person.name === 'Anay';
//   //   return person.name === 'Soumitra';
//   return person.name === 'Koushik';
// });

//  shortcut
const maxIndex = personData.findIndex((person) => person.name === 'Soumitra');

console.log(maxIndex);
