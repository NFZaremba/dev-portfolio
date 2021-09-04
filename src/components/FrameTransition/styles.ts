import { motion } from "framer-motion";
import styled from "styled-components";

export const Frame1 = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #f08, #d0e);
  z-index: 999;
`;
