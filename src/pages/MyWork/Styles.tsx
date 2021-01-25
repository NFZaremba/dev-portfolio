import styled from "styled-components";
// Animation
import { motion } from "framer-motion";

export const WorkSection = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  color: white;
  h2 {
    padding: 1rem 0rem;
  }
`;

export const StyledWork = styled(motion.div)`
  padding-bottom: 10rem;

  .line {
    height: 0.2rem;
    background: #23d997;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export const TechList = styled.div`
  display: flex;
  padding: 1rem 0rem;

  .tech-item {
    border: 1px solid black;
    border-radius: 5px;
    background-color: #464b49;
    padding: 0.5rem;
    margin-right: 1rem;
    color: #23d997;
  }
`;
