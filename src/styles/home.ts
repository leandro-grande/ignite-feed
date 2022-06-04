import styled from "styled-components";

export const SectionArea = styled.section`
  max-width: 1120px;
  margin: 2rem auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 16rem 1fr;
  gap: 2rem;


  > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;