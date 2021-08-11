import React, { useState } from "react";
import "./App.scss";
// import Button from "./components/Button";
// import Checkbox from "./components/Checkbox";
import styled, { ThemeProvider } from "styled-components";
import StyledButtons from "./components/StyledButtons";
import Dialog from "./components/Dialog";
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
  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog(true);
  };

  const onchange = (e) => {
    setCheck(e.target.checked);
  };

  const onConfirm = () => {
    setDialog(false);
    console.log("확인");
  };
  const onCancel = () => {
    setDialog(false);
    console.log("취소");
  };
  return (
    <ThemeProvider theme={{ palette }}>
      <>
        <div className="App">
          <StyledButtons color="pink" size="large" onClick={onClick}>
            삭제
          </StyledButtons>
        </div>
        <Dialog
          title="삭제 ㄱㄱ?"
          confirmText="삭제"
          cancelText="취소"
          visible={dialog}
          onConfirm={onConfirm}
          onCancel={onCancel}
        >
          데이터 ㄹㅇ 삭제 ㄱㄱ?
        </Dialog>
      </>
    </ThemeProvider>
  );
}

export default App;
