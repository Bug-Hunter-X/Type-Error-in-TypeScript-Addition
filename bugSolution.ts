function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number {
  if (typeof a === 'string' || typeof b === 'string') {
    return parseFloat(String(a)) + parseFloat(String(b));
  }
  return a + b;
}

let result1 = addSafe(1, "2"); // Now Works
let result2 = addSafe(1, 2);  // Now Works
let result3 = add(1, 2); // Original function
console.log(result1); // Output: 3
console.log(result2); //Output: 3
console.log(result3); // Output: 3