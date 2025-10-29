import Greeting from "./greeting";
function App() {
  return (
    <div>
      <h1>hello react</h1>
      <Greeting name ="Anamika" message ="how are you?"/>
      <Greeting name = "Harkirat"/>
      {/* //Every React component automatically receives a 
      special prop called children.
      It represents whatever you put between a component’s 
      opening and closing tags. */}
      <Greeting name="himanshi">
        <p>this message is to learn children props</p>
      </Greeting>
      <Greeting name="drashti">
        <button>click me</button>
      </Greeting>
    </div>
  );
}

export default App
