import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 7.2rem;
  background-color: var(--bg-color-medium);
  padding: 1.5rem 3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    font-weight: 600;
    cursor: pointer;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  color: #fff;

  h3 {
    font-weight: 600;
  }

  svg {
    margin-right: 0.5rem;
  }
`;

interface DropdownProps {
  show: boolean;
}

export const Dropdown = styled.div<DropdownProps>`
  position: absolute;
  top: 8.5rem;
  right: 1.5rem;
  z-index: 999;

  width: 25.6rem;
  background-color: var(--bg-color-medium);
  box-shadow: rgba(0, 0, 0, 0.6) 0px 5px 20px;
  border-radius: 0.5rem;

  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;

  ${(props) =>
    props.show &&
    css`
      opacity: 1;
      visibility: visible;
    `}

  button {
    outline: 0;
    width: 100%;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #fff;
    padding: 1.5rem;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    transition: background-color 0.2s;

    &:hover {
      background-color: rgba(0, 0, 0, 0.125);
    }

    svg {
      margin-right: 1rem;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: -8px;
    right: 19px;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 0px 8px 8px;
    border-color: transparent transparent var(--bg-color-medium);
  }
`;
