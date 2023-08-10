// Process 1
const nameData = ['Koushik', 'Soumitra', 'Surya', 30];

// printing log with array index
console.log(nameData[0], nameData[1]);

// Process 2
const INSTITUTE_NAME = ['Raha', 'Technologies'];

// storing array indexed data in constant
// const firstName = INSTITUTE_NAME[0];
// const lastName = INSTITUTE_NAME[1];

// console.log(firstName, lastName);

// Process 3

// Array Destructuring

const [firstName1, lastName1] = INSTITUTE_NAME;
console.log(firstName1, lastName1);

const nameData2 = ['Koushik', 'Ruidas', 'Mr.', 24, 'Bankura', 'Diploma'];
const [firstName, lastName, ...otherInformation] = nameData2;
// const [...otherInformation] = nameData2;
console.log(firstName, lastName, otherInformation);
