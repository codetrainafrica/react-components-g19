import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Button from "./components/Button";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Button title="Click me" goat={[1, 32, 3]} />
        <Button title="Press me" />
        <Button title="Touch me" />
      </div>
    );
  }
}

// class Button extends Component {
//   render() {
//     return <button>Click me!</button>;
//   }
// }

// function App() {
//   return <h1>Hello</h1>;
// }

// const App = () => {
//   return <h1>Hello</h1>;
// }

export default App;
