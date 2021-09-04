import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)``;

export const ListContainer = styled(motion.ul)`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 280px;
  height: 280px;
`;

export const ItemContainer = styled(motion.li)`
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 20px;
  position: relative;
  cursor: pointer;
  flex-shrink: 0;

  .outline {
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    border: 10px solid white;
    border-radius: 50%;
  }
`;
