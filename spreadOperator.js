const nameFragments = ['Raha', 'Technologies'];

const copiedNameFragments = [...nameFragments];

const copiedNameFragmentsWithoutSpreadOp = nameFragments;

nameFragments.push('Mr.');

console.log(
  copiedNameFragments,
  copiedNameFragmentsWithoutSpreadOp,
  nameFragments
);

console.log(Math.min(1, 5, -3));

// Spread operator example with Number array
const prices = [10.99, 5.99, 3.99, 6.59, 7.67, 40.78];
console.log(Math.min(...prices));

// Spread operator example with Object array

const persons = [
  {
    name: 'koushik',
    age: 24,
  },
  { name: 'Soumitra', age: 25 },
];

const newPersons = persons;

const copiedPersons = [...persons];

const copiedPersons2 = [
  persons.map((person) => ({
    name: person.name,
    age: person.age,
  })),
];

persons.push({ name: 'Surya', age: 27 });
persons[0].age = 31;

console.log(persons, copiedPersons, copiedPersons2);
