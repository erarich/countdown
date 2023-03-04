import { useEffect, useState } from "react";

const TestTimer = () => {

  const [counter, setCounter] = useState(60);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);


  return (
    <div>
      <div>Countdown: {counter}</div>
    </div>
  );
};

export default TestTimer;