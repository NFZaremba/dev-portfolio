import styled from "styled-components";
import { motion } from "framer-motion";

const Text = styled(motion.p)`
  padding: 3rem 0rem;
  color: #ccc;
  font-size: 1.4rem;
  line-height: 150%;
`;

const Button = styled(motion.button)`
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

const Hide = styled.div`
  overflow: hidden;
`;

export { Hide, Text, Button };
