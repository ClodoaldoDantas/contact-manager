import styled from 'styled-components';

const Input = styled.input`
  background-color: var(--bg-color);
  border: 2px solid var(--bg-color);
  color: var(--text-color);
  outline: 0;

  border-radius: 0.5rem;
  padding: 0 1.6rem;
  height: 5rem;
  width: 100%;

  transition: border 0.2s ease;

  &:focus {
    border-color: var(--primary);
  }
`;

export default Input;
