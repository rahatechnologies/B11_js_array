const prices = [10.99, 5.99, 3.99, 6.59, 7.67, 40.78];

const filteredArray = prices.filter((price, idx, prices) => {
  return price > 6;
});

console.log('Filtered Array example');
console.log(filteredArray);
const pricesType1 = [10.99, 5.99, 3.99, 6.59, 7.67];

const filteredArray2 = prices.filter((p) => p > 6);
