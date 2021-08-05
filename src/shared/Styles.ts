import styled from "styled-components";
import { motion } from "framer-motion";

export const Divider = styled(motion.div)`
  height: 0.2rem;
  background: #23d997;
  margin-bottom: 3rem;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 100%;
  padding: 1rem 0;
`;
