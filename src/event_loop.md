Event loop is like a manager.
JavaScript/Node.js runs on a single thread, executing one operation at a time from the call stack.
Synchronous code is executed immediately on the stack, while asynchronous operations are handled in the background (thread pool or Web APIs). Once completed, their callbacks go into the callback queue.
There is also a microtask queue (for example, Promise callbacks) that runs before the callback queue in each cycle.
The event loop moves tasks from these queues to the stack when it’s empty, keeping the main thread non-blocking and able to handle multiple requests efficiently.

```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout callback"); // Callback Queue
}, 0);

Promise.resolve().then(() => {
  console.log("Promise callback"); // Microtask Queue
});

console.log("End");

// Start
// End
// Promise callback
// Timeout callback
```
