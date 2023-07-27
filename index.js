// Number array
// const originalTestResults = [1, 5.3, 1.5, 10.99, -5, 10];

// console.log(originalTestResults.indexOf(5.3));
// console.log(originalTestResults.indexOf(1.5));

//  number array  (primitive datatype)
const originalTestResults2 = [1, 5.3, 1.5, 10.99, 1.5, -5, 10, 1.5];
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
