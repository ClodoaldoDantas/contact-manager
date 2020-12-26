import styled, { css } from 'styled-components';

interface ButtonProps {
  isLoading?: boolean;
}

const Button = styled.button<ButtonProps>`
  min-width: 10rem;
  text-transform: uppercase;
  font-weight: 700;
  background-color: var(--primary);
  color: var(--text-color);
  height: 5rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease;

  ${props =>
    props.isLoading &&
    css`
      cursor: wait;
      opacity: 0.8;
    `}

  &:hover {
    background-color: var(--primary-light);
  }
`;

export default Button;
