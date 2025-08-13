const counterBtn = document.getElementById("counterBtn");
const blockingBtn = document.getElementById("blockingBtn");
const workerBtn = document.getElementById("workerBtn");
const resultDiv = document.getElementById("result");

let count = 0;
counterBtn.addEventListener("click", () => {
  count++;
  counterBtn.innerText = `Clicked: ${count} times`;
  console.log(count);
});

// Button 1: Run heavy task on main thread -> CAUSES FREEZING
blockingBtn.addEventListener("click", () => {
  resultDiv.innerText = "Calculating on main thread... UI will freeze.";
  // Run heavy task here
  let result = 0;
  for (let i = 0; i < 10000000000; i++) {
    result += 1;
    console.log(result);
  }
  resultDiv.innerText = `Blocking result: ${result}`;
});

// Button 2: Use Web Worker -> NO FREEZING
workerBtn.addEventListener("click", () => {
  resultDiv.innerText = "Calculating with Worker... UI is responsive.";

  // 1. Create a new Worker
  const myWorker = new Worker("worker.js");

  // 2. Assign work to Worker
  myWorker.postMessage("start");

  // 3. Listen for results from Worker
  myWorker.onmessage = function (e) {
    resultDiv.innerText = `Worker result: ${e.data}`;
    console.log('main thread',e.data);
    console.log("Main thread received a message from worker.");
  };
});
