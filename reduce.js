const prices = [10.99, 5.99, 3.99, 6.59, 7.67, 40.78];

let sum = 0;

//  Example 1 : foreach
prices.forEach((price) => (sum += price));

console.log(sum);

//  example 2: reduce method
// const reducedSum = prices.reduce(
//   (previousValue, currentValue, curIdx, prices) => previousValue + currentValue,
//   0
// );

const reducedSum = prices.reduce((pValue, cValue) => pValue + cValue, 0);
console.log(reducedSum);
