const fs = require('fs')

console.log("I am about to read a file")

const start = Date.now();

const text = fs.readFileSync('../README.md', 'utf-8');

console.log(`Reading the file blocked for ${Date.now() - start} milliseconds`);
// Simulate large block task
for(let i = 0; i < 10000000000; i++) {}

const end = Date.now();

console.log(`Simulated blocking task took ${(end - start) / 1000} seconds`)
console.log(`All done`)