const originalTestResults = [1, 5.3, 1.5, 10.99, -5, 10];
// const storedResultsFromSlice = originalTestResults.slice();

// Wrong : start index < end index
// const storedResultsFromSlice = originalTestResults.slice(3, 2);

// Wrong : start index < end index
// const storedResultsFromSlice = originalTestResults.slice(-3, 2);

// const storedResultsFromSlice = originalTestResults.slice(-3, -2);
// const storedResultsFromSlice = originalTestResults.slice(-2, -1);
// const storedResultsFromSlice = originalTestResults.slice(1, 2);

//  only one parameter in slice method
//  startindex: 2
const storedResultsFromSlice = originalTestResults.slice(2);

originalTestResults.push(5.91);

console.log(storedResultsFromSlice);
// console.log(`output of slice method : ${testResults.slice(1, 4)} `);

// console.log(storedResultsFromSlice, originalTestResults);
