import styled from "styled-components";
import { StyledAbout } from "../../styles/CommonStyles";

export const StyledServices = styled(StyledAbout)`
  h2 {
    padding-bottom: 5rem;
  }

  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

export const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledCard = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;
