import React from "react";
import "./App.scss";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button size="big">BUTTON</Button>
        <Button>BUTTON</Button>
        <Button size="small">BUTTON</Button>
      </div>
      <div className="buttons">
        <Button size="big" color="gray">
          BUTTON
        </Button>
        <Button color="gray">BUTTON</Button>
        <Button size="small" color="gray">
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button size="big" color="pink">
          BUTTON
        </Button>
        <Button color="pink">BUTTON</Button>
        <Button size="small" color="pink">
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button size="big" outline>
          BUTTON
        </Button>
        <Button outline color="gray">
          BUTTON
        </Button>
        <Button size="small" outline color="pink">
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button size="big" fullWidth>
          BUTTON
        </Button>
        <Button size="big" fullWidth color="gray">
          BUTTON
        </Button>
        <Button size="big" fullWidth color="pink">
          BUTTON
        </Button>
      </div>
    </div>
  );
}

export default App;
