const originalTestResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10, 1.5];

console.log(originalTestResults.includes(10.99));
console.log(originalTestResults.includes(10.99, 2));

console.log(originalTestResults.includes(10.99, 4));

console.log(originalTestResults.includes(10.99, -5));

console.log(originalTestResults.includes(10.99, -4));
