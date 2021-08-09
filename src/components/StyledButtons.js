import React from "react";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

const colorStyles = css`
  ${({ theme, color }) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
    `;
  }}
`;

const StyledButton = styled.button`
  display: inline-block;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding: 0 1rem 0 1rem;
  transition: 0.8s;

  height: 2.25rem;
  font-size: 1rem;

  & + & {
    margin-left: 1rem;
  }

  ${colorStyles}
`;

function StyledButtons({ children, color, ...rest }) {
  return (
    <StyledButton color={color} {...rest}>
      {children}
    </StyledButton>
  );
}

StyledButton.defaultProps = {
  color: "blue",
};
export default StyledButtons;