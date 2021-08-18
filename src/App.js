import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import Button from "./components/Button";

function App() {
  const heading = <h3>Welcome</h3>;

  let name = "Ama";

  return (
    <>
      <h1 id="hdhdh" className="head" style={{}}>
        Welcome {`${name} is a girl`}
      </h1>
      <Button text="Click me" />
      <Button text="Submit" />
      <Button text="Go away" />
      {heading}
    </>
  );
}

export default App;
