import styled from "styled-components";

export const Error = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  div {
    background-color: #eee;

    width: 100%;
    max-width: 40rem;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    padding: 4rem;

    border-radius: 4px;
    h2 {
      margin-bottom: 2rem;
    }
    button {
      border: 0;
      border-radius: 4px;
      background-color: #333;
      color: #eee;
      padding: 1rem 2rem;
    }
  }
`;
