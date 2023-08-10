const ids = new Set([1, 2, 3]);

console.log(ids.has(56));
console.log(ids.has(2));

ids.add(78);

console.log(ids);

for (const entry of ids.entries()) {
  console.log(entry[0]);
}

const idsString = new Set(['Hi', 'from', 'set!']);
for (const entry of idsString.entries()) {
  console.log(entry[0]);
}

if (idsString.has('hello')) {
  idsString.delete('hello');
} else {
  console.log('hello is missing in set');
}

if (idsString.has('Hi')) {
  idsString.delete('Hi');
} else {
  console.log('Hi is missing in set');
}

console.log(idsString);
