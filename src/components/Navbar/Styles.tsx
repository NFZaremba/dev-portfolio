import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.nav)`
  position: absolute;
  width: 100%;
  z-index: 9999;
  top: 0;
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10%;

  a {
    text-decoration: none;
    &:hover {
      background: hsl(0deg 0% 29% / 21%);
      box-shadow: 0 0px 15px -6px rgb(255 255 255 / 40%);
      transition: 0.4s;
      color: #c1b;
    }
  }
  ul {
    display: flex;
    list-style: none;
  }
  .logo {
    position: relative;
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 2.5rem;
    position: relative;
    font-size: 2rem;
  }

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
