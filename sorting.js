const pricesType1 = [10.99, 5.99, 3.99, 6.59, 7.67];
const pricesType2 = [10.99, 4.67, 20.89, 30.78, 3.89];

console.log('Example 1');
const sortedPrices = pricesType1.sort();
console.log(sortedPrices);

console.log('=======================');

console.log('Example 2');

const sortedPrices2 = pricesType2.sort();
console.log(sortedPrices2);

console.log('=======================');

console.log('Example 3');

const sortedPrices3 = pricesType1.sort((a, b) => {
  if (a > b) {
    //  positive (a-b)
    return 1;
  } else if (a === b) {
    // (a-b) = 0
    return 0;
  } else {
    // negative (a-b)
    return -1;
  }
});

console.log(sortedPrices3);

console.log('=======================');

console.log('Example 4');
const sortedPrices4 = pricesType2.sort((a, b) => {
  if (a > b) {
    //  positive (a-b)
    return 1;
  } else if (a === b) {
    // (a-b) = 0
    return 0;
  } else {
    // negative (a-b)
    return -1;
  }
});
console.log(sortedPrices4);

console.log('Reverse example 1');

// spread operator
console.log(...pricesType1);

console.log(sortedPrices3.reverse());

console.log('Reverse example 2');
const sortedPrices3a = pricesType1.sort((a, b) => {
  if (a > b) {
    //  positive (a-b)
    return -1;
  } else if (a === b) {
    // (a-b) = 0
    return 0;
  } else {
    // negative (a-b)
    return 1;
  }
});
console.log(sortedPrices3a);
