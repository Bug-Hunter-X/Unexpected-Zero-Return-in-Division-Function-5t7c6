# Unexpected Zero Return in Division Function

This repository demonstrates a common JavaScript bug related to division by zero and how to solve it.  The `bug.js` file contains a function that incorrectly returns 0 when either input is 0, masking a potential `Infinity` or error.  The solution in `bugSolution.js` addresses this by explicitly handling the zero cases, making the code more robust.  This type of error can be insidious because it doesn't directly crash the program but leads to incorrect results.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `node bug.js` to observe the unexpected output.
4. Run `node bugSolution.js` to see the corrected behavior.