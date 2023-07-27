//******************************** */
// Different ways of Array creation techniques
//******************************** */
// Process1: Direct assignment
const numbers = [1, 2, 3];
console.log(numbers);

// Process2:  New object creation
const newNumbers = new Array(1, 2, 3);
console.log(newNumbers);

// Process3:  Using Constructor
const moreNumbers = Array(1, 2, 3);
console.log(moreNumbers);

//******************************** */
//  Empty array creation
//******************************** */
// Process1: Direct assignment
const numbers1 = [];
console.log(numbers1);

// Process2:  New object creation
const newNumbers1 = new Array();
console.log(newNumbers1);

// Process3:  Using Constructor
const moreNumbers1 = Array();
console.log(moreNumbers1);

//******************************** */
// String Array
//******************************** */

const stringArray = new Array('Hi', 'Welcome!');
console.log(stringArray);

// Empty spot inside array
const emptyStringArray = new Array('1', '', '', '', '3');
console.log(emptyStringArray);

// // Try process1 ( not good process)
// const emptyArray = new Array('1', undefined, undefined, undefined);
// console.log(emptyArray);

// // Try process2 ( not good process)
// const emptyArrayDirectAssignment = ['1', undefined, undefined, undefined];
// console.log(emptyArrayDirectAssignment);

// Use this one for creating empty array cells
const emptyArray = Array(5);
console.log(emptyArray);

const emptyArray2 = new Array(5);
console.log(emptyArray2);

// Direct update of specific Array index
emptyArray[1] = 'Hi';
emptyArray[4] = 'Welcome!';

console.log(emptyArray);

console.log(emptyArray[2]);
console.log(`emptyArray.length ${emptyArray.length}`);

const newArray = Array(5, 2);
console.log(newArray);

// Below array creation is not good as it will give slower performance

const yetMoreNumbers = Array.of(1, 2);
console.log(yetMoreNumbers);

// Use this for converting array like objects to Array
// for numbers
const ArrayLikeObjToArrayNumber = Array.from([9, 12]);
console.log(ArrayLikeObjToArrayNumber);

// for strings
const ArrayLikeObjToArrayString = Array.from(['Hello!', 'world']);
console.log(ArrayLikeObjToArrayString);

const listItems = document.querySelectorAll('li');
console.log(`ArrayLikeObject - ${listItems}`);

console.dir(listItems);

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);

//******************************** */
// What we can store inside an array
//******************************** */

// Array can store heterogeneous data

// Example: array of string
const hobbies = ['gardening', 'sports', 'cooking'];

// Example: Mix of data structure (integer, string, Object)
const personalData = [30, 'Koushik', { moreDetail: [] }];

// nested 2-dimensional Array
const analyticsData = [
  [1, 1.6],
  [-5.4, 2.1],
  [8.9, 3.5],
  [5],
  [],
  'hi',
  ['Hello', 'welcome'],
];

for (const data of analyticsData) {
  for (dataPoints of data) {
    console.log(dataPoints);
  }
}

console.log(personalData[1]);

const newHobbies = ['gardening', 'sports', 'cooking'];

//  push method for creating new index element in array as last element
newHobbies.push('Reading');
console.log(newHobbies);

// Direct assignment for creating new index element in array as last element
newHobbies[4] = 'writing';
console.log(newHobbies);

// removing last array element and return it
const poppedValue = newHobbies.pop();
console.log(`poppedValue: ${poppedValue}`);
console.log(newHobbies);

//Drawbacks:  performance is bad
// adding new element inside array as a first element
newHobbies.unshift('coding');
console.log(`After unshift() operation: ${newHobbies}`);

//Drawbacks:  performance is bad
newHobbies.shift();
console.log(`After shift() operation: ${newHobbies}`);

// Rarely used : creation of Empty cell Array
// newHobbies[10] = 'playing Cricket';
// console.log(`After newHobbies[10] assignment operation: ${newHobbies}`);
// console.log(newHobbies);
// console.log(newHobbies[8]);

//******************************** */
// Use of Array.splice
//******************************** */

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);

// // splice(start)
// const spliced_Months_Array = months.splice(2);

// console.log(spliced_Months_Array);
// console.log(months);

// splice(start, deleteCount)
const spliced_Months_Array2 = months.splice(2, 1);

console.log(spliced_Months_Array2);
console.log(months);

// splice(start, deleteCount, item0, item1)
const spliced_Months_Array3 = months.splice(2, 1, 'july', 'august');

console.log(spliced_Months_Array3);
console.log(months);

// splice(start, deleteCount, item0, item1, ...., itemN)
const testResults = [1, 5.3, 1.5, 10.99, -5, 10];

console.log(testResults.slice());
