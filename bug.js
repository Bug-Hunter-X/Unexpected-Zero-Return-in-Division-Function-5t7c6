function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; //This line is causing the bug
  }
  return a / b;
}

console.log(foo(10, 0)); // Output: 0
console.log(foo(0, 5)); // Output: 0
console.log(foo(10, 5)); // Output: 2