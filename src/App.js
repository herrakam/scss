import React, { useState } from "react";
import "./App.scss";
// import Button from "./components/Button";
// import Checkbox from "./components/Checkbox";
import styled, { ThemeProvider } from "styled-components";
import StyledButtons from "./components/StyledButtons";

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${(props) => props.color};
  border-radius: 50%;
  ${(props) =>
    props.huge &&
    `
  height: 10rem;
  width: 10rem;
  `}
`;

const palette = {
  blue: "#228be6",
  gray: "#496057",
  pink: "#f06595",
};

function App() {
  const [check, setCheck] = useState(false);

  const onchange = (e) => {
    setCheck(e.target.checked);
  };
  return (
    <ThemeProvider theme={{ palette }}>
      <div className="App">
        {/* <Circle color="skyblue" huge></Circle>
        <Circle color="black"></Circle> */}
        <div className="buttons">
          <StyledButtons size="large">Button</StyledButtons>
          <StyledButtons>Button</StyledButtons>
          <StyledButtons size="small">Button</StyledButtons>
        </div>
        <div className="buttons">
          <StyledButtons color="gray" size="large">
            Button
          </StyledButtons>
          <StyledButtons color="gray">Button</StyledButtons>
          <StyledButtons color="gray" size="small">
            Button
          </StyledButtons>
        </div>
        <div className="buttons">
          <StyledButtons color="pink" size="large">
            Button
          </StyledButtons>
          <StyledButtons color="pink">Button</StyledButtons>
          <StyledButtons color="pink" size="small">
            Button
          </StyledButtons>
        </div>
        {/* <div>
        <Checkbox onChange={onchange} checked={check}>
          다음 약관에 모두 동의
        </Checkbox>
      </div>
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
        <Button
          size="big"
          fullWidth
          color="pink"
          onClick={() => {
            console.log("클릭됨");
          }}
        >
          BUTTON
        </Button>
      </div> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
