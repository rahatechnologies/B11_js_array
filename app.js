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
