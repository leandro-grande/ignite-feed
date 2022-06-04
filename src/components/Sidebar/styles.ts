import styled from 'styled-components';

export const Container = styled.aside`
  height: 18.375rem;
  border-radius: 0.5rem;
  background-color: var(--cards);

  display: flex;
  flex-direction: column;
  overflow: hidden;

  .bg-sidebar {
    width: 100%;
    height: 4.5rem;
    background: url('/bg-sidebar.png');    
  }

  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--divider);

    margin-top: -2rem;

    h2 {
      font-size: 1rem;
      margin-top: 1rem;
    }

    span {
      font-size: 0.875rem;
      color: var(--text-support);
      margin-top: 0.4rem;
    } 
  }

  .button-area {

    padding: 1.5rem 2rem 2rem;

    button {
      width: 100%;
      height: 3.125rem;
      border: 1px solid var(--green);
      border-radius: 0.5rem;
      background-color: transparent;
      padding: 0 1.4rem;

      color: var(--green);
      font-weight: 700;
      font-size: 0.875rem;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;

      &:hover {
        background-color: var(--green);
        color: var(--white);

        img {
          filter: brightness(100%);
        }
      }      
    }

  }

  `;