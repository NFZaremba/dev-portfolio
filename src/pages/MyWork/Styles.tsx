import styled from "styled-components";

export const StyledWork = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  color: white;
  h2 {
    padding: 1rem 0rem;
  }
`;

export const StyledProject = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export const StyledTechList = styled.div`
  display: flex;
  padding: 1rem 0rem;

  .tech-item {
    border: 1px solid black;
    border-radius: 5px;
    background-color: #23d997;
    padding: 0.5rem;
    margin-right: 1rem;
  }
`;
