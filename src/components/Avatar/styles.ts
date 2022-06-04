import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  border: 2px solid var(--green);
  background-color: var(--cards);

  img {
    padding: 0.35rem;
    border-radius: 5px;
  }
`;