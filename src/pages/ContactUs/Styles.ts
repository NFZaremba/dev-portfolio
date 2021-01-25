import styled from "styled-components";
import { motion } from "framer-motion";

export const ContactSection = styled(motion.div)`
  padding: 5rem 10rem;
  color: #fff;
  min-height: 90vh;
`;

export const Title = styled(motion.div)`
  margin-bottom: 4rem;
  color: #fff;
`;

export const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #fff;
`;

export const SocialLinks = styled(motion.div)`
  display: flex;
  align-items: center;
  a {
    color: #fff;
    margin: 2rem;
    text-decoration: none;
  }
`;
