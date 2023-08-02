const prices = [10.99, 5.99, 3.99, 6.59, 7.67];

const tax = 0.19;
const taxAdjustedPrice = [];

// =========================
// For-Of loop: example
// =========================
// for (const price of prices) {
//   taxAdjustedPrice.push(price * (1 + tax));
// }

// =========================
// For each loop: example
// =========================

//  Example 1:
// prices.forEach((price, idx, prices) => {
//   taxAdjustedPrice.push(price * (1 + tax));
// });

//  Example 2:

// prices.forEach((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };

//   taxAdjustedPrice.push(priceObj);
// });

// console.log(taxAdjustedPrice);

// map method
const taxAdjustedPrices = prices.map((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };

  return priceObj;
});

console.log(prices, taxAdjustedPrices);
