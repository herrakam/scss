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
// const sizes = {
//   large: {
//     height: "3rem",
//     fontSize: "1.25rem",
//   },
//   medium: {
//     height: "2.25rem",
//     fontSize: "1rem",
//   },
//   small: {
//     height: "1.75rem",
//     fontSize: "0.875rem",
//   },
// };

const sizes = {
  large: {
    height: "3rem",
    fontSize: "1.25rem",
  },
  medium: {
    height: "2.25rem",
    fontSize: "1rem",
  },
  small: {
    height: "1.75rem",
    fontSize: "0.875rem",
  },
};

const sizeStyles = css`
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
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

  & + & {
    margin-left: 1rem;
  }

  ${colorStyles}
  ${sizeStyles}
`;

function StyledButtons({ children, color, size, ...rest }) {
  return (
    <StyledButton color={color} size={size} {...rest}>
      {children}
    </StyledButton>
  );
}

StyledButton.defaultProps = {
  color: "blue",
  size: "medium",
};
export default StyledButtons;
