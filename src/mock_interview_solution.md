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

1. Diagnosis
The main thread is being blocked.
* CPU-intensive work: 50 - 100 messages / second -> even small synchronous task of 5 ms -> consume 50% of the main thread's time.
* DOM thrashing: manipulate DOM every single message -> append and remove old 100 times per second --> main thread will be overload.

2. Core solution
Core architecture and decoupling and Batching

My solution are a web worker and requestAnimationFrame.

on the main.js I will use a  worker and dispatch data from webSocket by `worker.postMessage(event.data)`

on the worker.js I will get and provide the result by `self.onmessage` and `self.postMessage` when finishing the job.

use requestAnimationFrame to update the UI => create a flag whenever get the results from worker.js
```js
// In main.js again
let logBatch = [];
let isUpdateScheduled = false;

worker.onmessage = (event) => {
  logBatch.push(event.data);
  if (!isUpdateScheduled) {
    isUpdateScheduled = true;
    requestAnimationFrame(renderLogs);
  }
};

function renderLogs() {
  // Process all logs collected during the last frame.
  const logsToRender = [...logBatch];
  logBatch = []; // Clear the batch
  
  // Efficiently update the DOM with the new logs here.
  updateLogList(logsToRender); 

  isUpdateScheduled = false;
}
```

3. Refinements
Using UI virtualization to handle render DOM --> based on the viewport we will render the suitable of DOM.

Compare with lazy load -> lazy load only load when user in the view points --> add more DOM. content needs to pull
UI virtualization: keep the original DOM but change the content --> content already in the JS memory.

By combining a Web Worker for processing, requestAnimationFrame for batching, and UI virtualization for rendering, we can build a system that is highly performance and can handle a massive throughput of data without ever compromising the user experience.





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
We always answer by three outlines:
Cause, solutions, actions

1. **Cause (we can combine with Big O Notation)**
- The function allItems.filter is a synchronous function that will check each element of array
-> time complexity is O(n)
- function isItemVisible is a loop with a heavy task -> time complexity is O(m)
=> Total time complexity is O(n*m).
The algorithm execute with linearly and directly with the number of items. This design is fundamentally unscalable.
The root cause, is that we are executing an O(n*m) synchronous, blocking the main thread.

2. **Outline Solutions** and **Actions**

To avoid this situation, we will create a **web worker**, it will help us handle the synchronous function by using `self.onmessage` and `self.postMessage`.

Step 1: we will create a worker file `filter.worker.js`
```js
// In filter.worker.js

// The slow, synchronous function is moved into the worker.
// It can block here as much as it wants without affecting the UI.
function isItemVisible(item) {
  // ... same expensive logic ...
  let shouldBeVisible = true;
  for (let i = 0; i < 1000000; i++) {
    shouldBeVisible = shouldBeVisible && (item.id + i) % 2 === 0;
  }
  return shouldBeVisible;
}

// The worker listens for a message from the main thread.
self.onmessage = function(event) {
  const allItems = event.data;
  console.log('[Worker] Received items, starting filter...');
  
  const visibleItems = allItems.filter(item => isItemVisible(item));
  
  // When done, it posts the result back to the main thread.
  console.log('[Worker] Filter complete, posting results back.');
  self.postMessage(visibleItems);
};
```
Step 2: refactor main function to be asynchronous


```js
// In main.js

function getVisibleItems(allItems) {
  // Return a Promise to handle the async nature of the worker.
  return new Promise((resolve, reject) => {
    // Create the worker instance. It's best practice to create it
    // on-demand if the operation isn't called frequently.
    const worker = new Worker('filter.worker.js');

    // Define what to do when the worker sends the results back.
    worker.onmessage = (event) => {
      console.log('[Main] Received results from worker.');
      resolve(event.data); // Resolve the promise with the filtered data.
      worker.terminate(); // Clean up the worker to save resources.
    };

    // Define what to do if the worker has an error.
    worker.onerror = (error) => {
      console.error('[Main] Worker error:', error);
      reject(error); // Reject the promise.
      worker.terminate(); // Clean up.
    };
    
    // Start the process by sending the data to the worker.
    console.log('[Main] Posting items to worker...');
    worker.postMessage(allItems);
  });
}
``` 

Step 3: update the initial Call to handle the Promise
```js
// New initial call in main.js

console.log('Starting the filtering process...');
// Immediately show a loading indicator to the user.
showLoadingSpinner(); 

getVisibleItems(largeArrayOfItems)
  .then(visibleResults => {
    // This code now runs only AFTER the worker has finished.
    console.log('Successfully filtered items.');
    updateUI(visibleResults);
  })
  .catch(error => {
    // Handle any errors that might have occurred.
    console.error('Filtering failed:', error);
    showErrorMessage();
  })
  .finally(() => {
    // Always hide the spinner when the process is complete,
    // whether it succeeded or failed.
    hideLoadingSpinner();
  });

console.log('Filtering is now running in the background. The UI is not frozen!');
```


Another method is to use `try and catch`

```js
// The getVisibleItems function remains the same, as it already returns a Promise.
function getVisibleItems(allItems) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('filter.worker.js');

    worker.onmessage = (event) => {
      resolve(event.data);
      worker.terminate();
    };

    worker.onerror = (error) => {
      reject(error);
      worker.terminate();
    };
    
    worker.postMessage(allItems);
  });
}


// Here is the new async function to handle the entire process.
async function handleFilterProcess(items) {
  console.log('Starting the filtering process...');
  showLoadingSpinner(); // Provide immediate UI feedback.

  try {
    // The 'await' keyword pauses the function here until the promise resolves.
    // It makes the asynchronous code read like synchronous code.
    const visibleResults = await getVisibleItems(items);
    
    // This code only runs if the promise resolves successfully.
    console.log('Successfully filtered items.');
    updateUI(visibleResults);

  } catch (error) {
    // If the promise from getVisibleItems rejects, execution jumps to this 'catch' block.
    console.error('Filtering failed:', error);
    showErrorMessage();

  } finally {
    // The 'finally' block will always execute, regardless of success or failure.
    // It's the perfect place to clean up UI state.
    hideLoadingSpinner();
  }
}

// --- Initial Call ---
// Now we just call our new async function.
handleFilterProcess(largeArrayOfItems);

console.log('Filtering is now running in the background. The UI is not frozen!');
```