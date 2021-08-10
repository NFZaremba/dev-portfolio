import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledWork = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-self: flex-start;

  img {
    width: 100%;
    /* height: 70vh; */
    object-fit: cover;
  }
`;

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 0rem;

  .tech-item {
    border: 1px solid black;
    border-radius: 5px;
    background-color: #464b49;
    padding: 0.5rem;
    margin-right: 1rem;
    margin-bottom: 0.5rem;
    color: #23d997;
  }
`;
