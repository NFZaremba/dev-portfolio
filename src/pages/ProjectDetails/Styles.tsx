import styled from "styled-components";
// Animation
import { motion } from "framer-motion";

export const Details = styled(motion.div)`
  color: white;
`;

export const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export const Description = styled.div`
  padding: 0rem 3rem;
`;
