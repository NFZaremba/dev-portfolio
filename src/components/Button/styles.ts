import { motion } from "framer-motion";
import styled from "styled-components";
import { ButtonSizes } from "./types";

const BUTTON_SIZES = {
  small: "12em",
  large: "18em",
  full: "100%",
};

export const StyledButton = styled(motion.button)<{
  size: ButtonSizes;
  color: string;
}>`
  font-family: "Inter", sans-serif;
  font-weight: bold;
  font-size: 1.1 rem;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 3px solid ${(props) => props.color};
  background: transparent;
  color: white;
  transition: all 0.5s ease;
  width: ${(props) => BUTTON_SIZES[props.size]};

  &:hover {
    background-color: ${(props) => props.color};
    color: white;
  }
`;
