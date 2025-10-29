function Greeting(props){     //react component should be initialised with capital letter
   return (
       <div>
           <h2>hello, { props.name }! I am a component. {props.message} </h2>
           {props.children}
       </div>
    );
}
export default Greeting;

// or
// same thing -->
// function Greeting({name, message, children}){
//     return (
//         <div>
//             <h2>hello, {name}! I am a component. {message} </h2>
//             {children}
//         </div>
//     )
// }
// export default Greeting;