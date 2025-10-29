import { useState, useEffect } from "react";

function App() {
  const [counterVisible, setCounterVisible] = useState(true);

  // toggle visibility every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCounterVisible((c) => !c);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Conditional Rendering Demo</h1>

      {/* 1️⃣ Using ternary operator */}
      {counterVisible ? <Counter /> : <p>Counter hidden!</p>}

      {/* 2️⃣ Or simply using && */}
      {/* {counterVisible && <Counter />} */}
    </div>
  );
}

function Counter() {
  useEffect(() => {
    console.log("Counter mounted");

    return () => console.log("Counter unmounted");
  }, []);

  return <h2>👋 Counter Component is Visible!</h2>;
}

export default App;