import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    margin-bottom: 1.5rem;
  }

  .link {
    margin-top: 1rem;
    text-align: center;

    a {
      color: var(--primary);
    }
  }
`;

export const Form = styled.form`
  max-width: 48rem;
  width: 100%;

  background-color: var(--bg-color-medium);
  border-radius: 0.5rem;
  padding: 6.4rem;

  display: grid;
  grid-gap: 1rem;
`;
