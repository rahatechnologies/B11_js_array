// split method

const data = 'new york;10.99;2000';
const data2 = 'new york|10.99|2000';
const data3 = 'new york|10.99r|2000';

const transformedData = data.split(';');
const transformedData2 = data2.split('|');
const transformedData3 = data3.split('r');

console.log(transformedData);
console.log(transformedData2);
console.log(transformedData3);

// string to number conversion

transformedData[2] = +transformedData[2];
console.log(transformedData);

// join  method

const nameFragments = ['Raha', 'Technologies'];
const name = nameFragments.join(' ');

console.log(name);
