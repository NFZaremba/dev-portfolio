import styled from "styled-components";
// Animation
import { motion } from "framer-motion";

export const StyledNavbar = styled.nav`
  position: absolute;
  width: 100%;
  z-index: 9999;
  top: 0;
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  /* background-color: #23d997; */
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
    padding-left: 10rem;
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

export const Line = styled(motion.div)`
  height: 0.1rem;
  background: black;
  margin-top: 0.5rem;
`;
