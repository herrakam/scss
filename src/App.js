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

const Buttons = styled.div`
  & + & {
    margin-top: 1rem;
  }
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
        <Buttons>
          <StyledButtons size="large">Button</StyledButtons>
          <StyledButtons>Button</StyledButtons>
          <StyledButtons size="small">Button</StyledButtons>
        </Buttons>
        <Buttons>
          <StyledButtons color="gray" size="large">
            Button
          </StyledButtons>
          <StyledButtons color="gray">Button</StyledButtons>
          <StyledButtons color="gray" size="small">
            Button
          </StyledButtons>
        </Buttons>
        <Buttons>
          <StyledButtons color="pink" size="large">
            Button
          </StyledButtons>
          <StyledButtons color="pink">Button</StyledButtons>
          <StyledButtons color="pink" size="small">
            Button
          </StyledButtons>
        </Buttons>
        <Buttons>
          <StyledButtons size="large" outline>
            Button
          </StyledButtons>
          <StyledButtons color="gray" outline>
            Button
          </StyledButtons>
          <StyledButtons color="pink" size="small" outline>
            Button
          </StyledButtons>
        </Buttons>
        <Buttons>
          <StyledButtons size="large" fullWidth>
            Button
          </StyledButtons>
          <StyledButtons color="gray" size="large" fullWidth>
            Button
          </StyledButtons>
          <StyledButtons color="pink" size="large" fullWidth>
            Button
          </StyledButtons>
        </Buttons>
      </div>
    </ThemeProvider>
  );
}

export default App;
