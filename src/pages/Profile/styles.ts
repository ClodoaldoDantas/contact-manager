import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--bg-color-medium);
  width: 40rem;
  padding: 2rem;
  border-radius: 0.5rem;

  & > div {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    strong {
      font-weight: 600;
      margin-right: 0.8rem;
    }

    svg {
      margin-right: 0.8rem;
    }
  }

  button {
    background-color: transparent;
    border: none;
    outline: 0;
    cursor: pointer;

    display: flex;
    align-items: center;
    color: #fff;

    svg {
      margin-right: 0.5rem;
    }
  }
`;
