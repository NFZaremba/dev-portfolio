import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledDivider = styled(motion.div)<{ color: string }>`
  height: 0.2rem;
  background: ${(props) => props.color};
  margin-bottom: 3rem;
`;
