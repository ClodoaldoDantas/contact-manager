import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--bg-color);
  padding: 1.5rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  .avatar {
    height: 5.2rem;
    width: 5.2rem;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    margin-right: 1rem;
  }

  .info {
    h4 {
      font-weight: 600;
    }

    & > div {
      display: flex;
    }

    span {
      display: flex;
      align-items: center;

      svg {
        margin-right: 0.5rem;
      }

      &:not(:first-child)::before {
        content: "|";
        color: var(--bg-color);
        margin: 0 1rem;
      }
    }
  }
`;

export const AnimationContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
