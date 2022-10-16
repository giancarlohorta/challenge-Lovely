import styled from "styled-components";

export const ContainerProfile = styled.div`
  margin: 4rem 0;
  background-color: #eee;
  border-radius: 4px;
  .loading-profile,
  .loading-repositories {
    height: calc(100vh - 8rem);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .loading-repositories {
    height: auto;
  }
  .profile {
    display: flex;
    align-items: center;
    margin-bottom: 3rem;
    img {
      border-radius: 4px 0 0 0;
      width: 100%;
    }
    .description-profile {
      width: 100%;
      padding: 4rem 2rem;
      align-self: stretch;
      h1 {
        margin-bottom: 1rem;
      }
    }
  }
  h2 {
    margin: 0 auto 1rem auto;
    text-align: center;
  }
  .repositories {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    li {
      list-style: none;
      width: calc(100% / 3 - 1.5rem);
      height: 100%;
      min-height: 20rem;

      margin: 0.75rem 0;
      padding: 2rem;

      background-color: #b4b4b4;
      color: #333;

      h2 {
        text-align: left;
        font-size: 2.4rem;
        margin-bottom: 2rem;
      }
    }
  }
`;
