import "./App.css";
import React, { useState } from "react";
import Button from "./components/Button";

function App() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("Tony");

  function AddOne() {
    setNumber(number + 1);
  }

  return (
    <div>
      <h1>{number}</h1>
      <h1>{name}</h1>
      <button onClick={() => AddOne()}>Add 1</button>
    </div>
  );
}

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = { number: 0, name: "Tony" };
//   }

//   // handleLogin = () => {
//   //   console.log("Login");
//   // };

//   AddOne() {
//     this.setState({
//       number: this.state.number + 1,
//       name: "Kofi" + this.state.number,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.number}</h1>
//         <h1>{this.state.name}</h1>
//         <button onClick={() => this.AddOne()}>Add 1</button>
//         {/* <Button btnTitle="Login" color="red" handleClick={this.handleLogin} />
//         <Button btnTitle="Click me" color="blue" />
//         <Button btnTitle="Sign up" color="yellow" /> */}
//       </div>
//     );
//   }
// }

export default App;
