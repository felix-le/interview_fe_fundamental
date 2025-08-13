// almost time I use typeScript, however, this file only for learning purpose
import { useState, useEffect, useRef } from 'react';

export const useSimpleWorker = (workerPath) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  
  // useRef to keep the worker instance, avoid creating a new one every time the component renders
  const workerRef = useRef(null);

  useEffect(() => {
    // Tạo worker khi component được mount
    workerRef.current = new Worker(new URL(workerPath, import.meta.url));

    workerRef.current.onmessage = (event) => {
      setResult(event.data);
    };

    workerRef.current.onerror = (err) => {
      setError(err.message);
    };

    // Important: Terminate worker when component unmount to avoid memory leak
    return () => {
      workerRef.current.terminate();
    };
  }, [workerPath]);

  const postMessageToWorker = (message) => {
    if (workerRef.current) {
      workerRef.current.postMessage(message);
    }
  };

  return { result, error, postMessageToWorker };
};