### **Question 1: Event Loop and Execution Order**

"Consider the following JavaScript code snippet. Can you walk me through the exact order in which the messages will be logged to the console? More importantly, for each message, explain the underlying mechanism (Call Stack, Microtask Queue, Macrotask Queue) that dictates this order."

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("Promise 1");
  })
  .then(() => {
    console.log("Promise 2");
  });

console.log("End");

/**
 *
 * Start
 * End
 * As all synchronous function will be execute immediately
 *
 * promise 1
 * promise 2
 * As promise is Microtask Queue
 *
 *  JS is a single-thread, run one by one from stack.
 * Event loop is like a manager which will arrange functions on callback queue.
 * Microtask queue always run until finish then Macrotask queue will run.
 *
 * Timeout
 */
```

---

### **Question 2: Real-time Data Processing**

"You are tasked with building a client-side logging tool. It receives a continuous stream of data messages via a WebSocket. For each message, you need to perform a moderately complex data transformation (e.g., parsing a structured log format and extracting key metrics) before displaying it in a list that shows the most recent 1,000 entries.

During periods of high message volume (50-100 messages per second), users report that their scrolling becomes jerky and the entire UI feels unresponsive. How would you architect this feature to handle the high data throughput while ensuring the user interface remains smooth?"
