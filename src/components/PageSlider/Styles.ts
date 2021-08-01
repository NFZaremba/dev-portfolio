import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Section = styled(motion.section)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10rem 10rem 5rem;
  color: white;

  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

export const Title = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;

  h2 {
    font-weight: lighter;
  }

  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

export const Header = styled(motion.h2)``;

export const ImageLink = styled(Link)`
  flex: 1;
  overflow: hidden;
  z-index: 2;
`;

export const Image = styled(motion.img)`
  width: 100%;
  height: 80vh;
  object-fit: cover;
`;
