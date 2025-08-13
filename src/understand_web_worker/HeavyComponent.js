import React from 'react';
import { useSimpleWorker } from './useSimpleWorker';

function MyHeavyComponent() {
  // use hook, point to the worker file
  const { result, error, postMessageToWorker } = useSimpleWorker('./worker.js');

  const handleCalculate = () => {
    // send message to worker to start working
    postMessageToWorker('start');
  };

  return (
    <div>
      <h2>Web Worker in React Demo</h2>
      <button onClick={handleCalculate}>
        Calculate Heavy Task (with Worker)
      </button>
      {result && <p>Result from worker: {result}</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <p>You can still interact with other parts of the UI.</p>
    </div>
  );
}

export default MyHeavyComponent;