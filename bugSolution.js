function foo(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  } else if (a === 0 || b === 0) {
    return 0; 
  }
  return a / b;
}

console.log(foo(10, 0)); // Throws an error
console.log(foo(0, 5)); // Output: 0
console.log(foo(10, 5)); // Output: 2