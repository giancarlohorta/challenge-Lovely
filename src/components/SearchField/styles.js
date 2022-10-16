import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  display: flex;
  input {
    width: calc(100% - 4.5rem);
    height: 4.5rem;
    border: none;
    background-color: #eee;
    padding: 1rem;
    color: #484848;
    border-radius: 4px 0 0 4px;
  }
  button {
    background-color: #484848;
    border: none;
    width: 4.5rem;
    height: 4.5rem;
    font-size: 2.5rem;
    line-height: 2.5rem;
    border-radius: 0 4px 4px 0;
    svg {
      fill: #eee;
    }
  }
`;
