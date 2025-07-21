// JavaScript Execution Process
// - Parsing and Compilation: The JavaScript engine (e.g., V8 for Chrome and Node.js) first parses the code and compiles it to machine-readable format.
// - Execution Context Creation: For every function call and global code execution, JavaScript creates an execution context (a special environment where the code runs).
// - Call Stack Usage: JavaScript uses the call stack to keep track of function calls. When a function is invoked, it's pushed onto the stack; when it returns, it's popped off.
// - Heap and Memory Allocation: Objects and variables are stored in memory (the heap), which JavaScript manages using garbage collection.
// - Event Loop and Callback Queue: JavaScript efficiently handles asynchronous tasks (like setTimeout, Promises, or Fetch API) via the event loop, moving them from a callback queue to the call stack when appropriate.

// What is the Call Stack?
// The call stack is a data structure that tracks function calls in JavaScript. It operates using Last-In, First-Out (LIFO), meaning the last function called is the first one completed.
// Example of Call Stack in Action
function first() {
  console.log("First function");
  second();
}

function second() {
  console.log("Second function");
  third();
}

function third() {
  console.log("Third function");
}

first();

// 🔍 How the Call Stack Works Here:
// - first() is called → pushed onto the stack.
// - Inside first(), second() is called → pushed onto the stack.
// - Inside second(), third() is called → pushed onto the stack.
// - third() executes → popped off the stack.
// - second() completes → popped off.
// - first() completes → popped off.
// Each function gets added to the stack when invoked and removed once finished—avoiding memory overload!





