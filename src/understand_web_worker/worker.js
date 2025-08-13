// Worker doesn't have access to 'window', instead use 'self'
self.onmessage = function (event) {
  console.log("Worker received a message.");

  // Heavy computational task
  let result = 0;
  for (let i = 0; i < 10; i++) {
    result += 1;
    console.log('result',result);
  }

  // Send result back to main thread
  self.postMessage(result);
};
