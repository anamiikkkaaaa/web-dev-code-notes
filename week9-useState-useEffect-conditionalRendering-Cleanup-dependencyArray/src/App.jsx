import { useState, useEffect } from 'react';
function App() {
  const [count, setCount] = useState(0);
  // let [counterVisible, setCounterVisible] = useState(true);

  // useEffect(function(){
  //   setInterval(function(){
  //     setCounterVisible(c => !c)
  //   }, 5000);
  // }, [])
  function increase(){
    setCount(c=>c+1);
  }
  return <div>
    
    {/* {counterVisible ? <Counter/> : null}
    {counterVisible && <Counter/>} */}

    {/* <div style={{visibility:counterVisible ? "hidden" : "visible"}}> <Counter/></div> */}
    <Counter count = {count}/>
    <button onClick = {increase}>Increase count</button>
  </div>
}
// mounting, re-rendering, unmounting (lifecycle events)
function Counter(props){
  //const [count, setCount] = useState(0);

  // function increaseCount(){
  //   setCount(count+1);
  // }
  // function decreaseCount(){
  //   setCount(count-1);
  // }
  // function resetCount(){
  //   setCount(0);
  // }

  //console.log("uwbwwo"); this gets called infinite times
  //means setInterval does too
  //any time the state variables renders, react runs the component func again(re-rending)
  //hence we have to do hooking into the lifecycle events of react
  // for that we use useEffect

  // useEffect(function(){
  //   let clock = setInterval(function(){
  //     setCount(count => count + 1)
  //   }, 1000);
  //   console.log("mounted");
  //   return function(){
  //     console.log("on unmount");
  //        clearInterval(clock);
  //   }
  // }, []);  // []: dependency array, to use state variables

  // setInterval(function(){  //this func runs every sec
  //   setCount(count+1);
  // }, 1000)

  useEffect(function(){
    console.log("mount");

    return function(){
      console.log("unmount")
    }
  }, []);

  useEffect(function(){
    console.log("count has changed");

    return function(){
      console.log("cleanup")
    }
  }, [props.count]);   //dependency array, anytime the count
                       // increase the code inside the function runs

  return <div>
    Counter! {props.count}
    {/* <h1 id="text">{count}</h1> */}
    {/* <button onClick = {increaseCount}>increase count</button>
    <button onClick = {decreaseCount}>decrease count</button>
    <button onClick = {resetCount}>reset count</button> */}
  </div>
}
export default App
