import styled from "styled-components";
import { motion } from "framer-motion";

export const Button = styled(motion.button)`
  font-family: "Inter", sans-serif;
  font-weight: bold;
  font-size: 1.1 rem;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 3px solid #23d997;
  background: transparent;
  color: white;
  transition: all 0.5s ease;

  &:hover {
    background-color: #23d997;
    color: white;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;

export const Divider = styled(motion.div)`
  height: 0.2rem;
  background: #23d997;
  margin-bottom: 3rem;
`;
