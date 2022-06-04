import styled from 'styled-components';

export const Container = styled.article`
  padding: 2.5rem;
  background-color: var(--cards);
  border-radius: 8px;

  > header {
    display: flex;
    align-items: center;

      span, time {
        font-size: 0.875rem;
        color: var(--text-support);
      } 

    .profile {
      margin-left: 1rem;

      h2 {
        font-size: 1rem;
        margin-bottom: 0.4rem;
      }
    }

    .publish {
      margin-left: auto;
    }
  }

  .post {
    margin-top: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--divider);
    
    strong {
      color: var(--green);
    }
  }

  form {
    margin-top: 1.5rem;

    legend {
      color: var(--white);
      font-weight: 700;
    }

    textarea {
      width: 100%;
      height: 6rem;
      margin-top: 1rem;
      padding: 1rem;

      border: 0;
      border-radius: 8px;
      border: 1px solid transparent;

      background-color: var(--background);
      resize: none;

      font-size: 1rem;
      color: var(--white);

      &::placeholder {
        font-size: 1rem;
        font-family: 'Roboto', sans-serif;
      }

      &:focus {
        outline: 1px solid var(--green);
      }
      
    }

    footer {
      visibility: hidden;
      max-height: 0;
    }

    &:focus-within footer {
      visibility: visible;
      max-height: none;
    }

    button {
      margin-top: 1rem;
      padding: 1rem 1.5rem;
      border: 0;
      border-radius: 0.5rem;
      background-color: var(--green);

      color: var(--white);
      font-weight: 700;
      font-size: 1rem;
      transition: background-color 0.2s;

      &:hover:enabled {
        background-color: var(--green-light);
      }
    }
  }
`;

