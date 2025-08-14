# Mock interview

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
```

---

### **Question 2: Real-time Data Processing**

"You are tasked with building a client-side logging tool. It receives a continuous stream of data messages via a WebSocket. For each message, you need to perform a moderately complex data transformation (e.g., parsing a structured log format and extracting key metrics) before displaying it in a list that shows the most recent 1,000 entries.

During periods of high message volume (50-100 messages per second), users report that their scrolling becomes jerky and the entire UI feels unresponsive. How would you architect this feature to handle the high data throughput while ensuring the user interface remains smooth?"

---

### **Question 3: Diagnosing a Performance Bottleneck**

"A teammate has written a function to process an array of items. The goal is to apply a filter to each item, which involves a computationally expensive, synchronous function called `isItemVisible()`. Testers have reported that when the input array contains more than a few thousand items, the browser freezes for a noticeable period.

Please analyze the code below. Identify the root cause of the performance issue and describe, step-by-step, how you would refactor it into a non-blocking, scalable solution."

```javascript
// This is a very slow, synchronous function.
// It cannot be made asynchronous.
function isItemVisible(item) {
  // Imagine complex, blocking calculations happening here for 2ms.
  let shouldBeVisible = true;
  for (let i = 0; i < 1000000; i++) {
    shouldBeVisible = shouldBeVisible && (item.id + i) % 2 === 0;
  }
  return shouldBeVisible;
}

function getVisibleItems(allItems) {
  // The 'allItems' array can contain over 5,000 items.
  console.log("Starting filter...");

  const visibleItems = allItems.filter((item) => isItemVisible(item));

  console.log("Filter complete.");
  return visibleItems;
}

// Initial call
const visibleResults = getVisibleItems(largeArrayOfItems);
updateUI(visibleResults);
```

