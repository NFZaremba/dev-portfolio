import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledNavbar = styled(motion.nav)`
  position: absolute;
  width: 100%;
  z-index: 9999;
  top: 0;
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;

  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  .logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 4rem;
    position: relative;
  }

  // TODO: change this, add hamburger
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 1rem;
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;
