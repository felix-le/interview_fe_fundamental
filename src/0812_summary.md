# Summary knowledge

JavaScript runs on a single main thread, executing code one step at a time.

Browsers provide Web APIs (like timers, fetch, and DOM events) that handle tasks asynchronously. When these tasks finish, their callbacks go into a queue waiting for the main thread to run them.

The event loop manages this queue, making sure callbacks run one by one on the main thread without blocking.

Synchronous code runs immediately.

Microtasks (like Promise.then) run before macrotasks (like setTimeout).

### Because JavaScript has only one thread, heavy tasks can freeze the UI. To fix this, we use Web Workers:

They run on separate threads with their own event loops.

They can’t access the DOM directly.

They communicate with the main thread by sending messages.

They are great for heavy or long-running tasks (like image processing) to keep the UI smooth.

Example: When uploading images, a Web Worker can resize images in the background while the main thread keeps the interface responsive.

```js
console.log("script start");

setTimeout(function () {
  console.log("setTimeout");
}, 0);

Promise.resolve()
  .then(function () {
    console.log("promise1");
  })
  .then(function () {
    console.log("promise2");
  });

console.log("script end");

/**
 * script start
script end
promise1
promise2
setTimeout
 */
```
