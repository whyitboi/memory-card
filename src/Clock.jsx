import { useState, useEffect } from "react";

export function Clock() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    //starts synchronizing
    const key = setInterval(() => {
      setCounter((count) => count + 1);
    }, 1000);

    //Clean up function
    //stops synchronizing
    return () => {
      clearInterval(key);
    };
  }, []);

  return <p>{counter} seconds has passed</p>;
}
