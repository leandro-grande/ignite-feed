import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  .avatar {
    border-radius: 0.5rem;
  }

.feedback-area {
  flex: 1;

  .feedback {
    background-color: #29292E;
    border-radius: 8px;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    position: relative;
    

    strong {
      color: var(--text-title);
    }

    time {
      margin-top: 0.5rem;
      font-size: 0.75rem;
      color: var(--text-support)
    }

    p {
      margin-top: 1rem;
      color: #c4c4c4;
      font-size: 0.875rem;
    }

    button {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background-color: transparent;
      color: var(--text-support);
      border: 0;
      font-size: 0;
      transition: color 0.3s;

      &:hover {
        color: var(--red)
      }
    }

  }

  footer {
    margin-top: 1rem;

    button {
      background: transparent;
      border: 0;
      color: var(--text-support);

      display: flex;
      align-items: center;
      gap: 0.5rem;

      &:hover {
        color: var(--green);
      }

      span {
        color: var(--text-support);
      }
    }
  }
}

`;