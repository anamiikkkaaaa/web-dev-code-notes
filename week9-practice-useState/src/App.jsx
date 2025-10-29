import { useState, useEffect} from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState("A");

  console.log("app rendered")
  // dependency array: if not passed then useEffect runs after
  //every render
  //[]: runs after the first render i.e. once
  //[count]: on the first render and everytime count changes
  useEffect(() => {
    console.log("effect ran because count changed")
  }, [count]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("running interval...");
    }, 1000);

    return () => {
      console.log("clearing old interval...");
      clearInterval(interval);
    }
  }, [count]);
  function handleChange(event){
    setName(event.target.value);
  }

  function increase(){
    setCount(count+1);
  }

  function decrease(){
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Counter App</h1>
      <h2>Count: {count}</h2>
      <input type="text" placeholder="your name" onChange={handleChange}/>
      <br/>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={()=>setCount(0)}>Reset</button>
      <h2>hello {name}, your count is {count} right now.</h2>
    </div>
  )
}

export default App
