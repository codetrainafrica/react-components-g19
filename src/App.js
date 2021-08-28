import "./App.css";
import React, { useState } from "react";
import Button from "./components/Button";

function App() {
  const [age, updateAge] = useState(19);
  const [name, setName] = useState("");

  const AddOne = () => {
    setName("John");
  };

  return (
    <div>
      <h3>{name}</h3>
      <button onClick={AddOne}>Add 1</button>
    </div>
  );
}

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = { name: "", age: 14 };
//   }

//   render() {
//     const AddOne = () => {
//       this.setState({ name: "John" });
//     };

//     return (
//       <div>
//         <h1>{this.state.name}</h1>
//         <button onClick={AddOne}>Add 1</button>
//       </div>
//     );
//   }
// }

export default App;
