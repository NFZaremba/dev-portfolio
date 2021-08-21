import { motion } from "framer-motion";
import styled from "styled-components";
import { ButtonSizes } from "./types";
import classnames from "classnames";
import { IButtonProps } from "./types";

const BUTTON_SIZES = {
  small: "12em",
  large: "18em",
  full: "100%",
};

//* Styles
export const StyledButton = styled(motion.button)<{
  size: ButtonSizes;
  color: string;
}>`
  font-family: "Inter", sans-serif;
  font-weight: bold;
  font-size: 1.1 rem;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 2px solid ${(props) => props.color};
  border-radius: 1rem;
  background: transparent;
  color: white;
  transition: all 0.5s ease;
  width: ${(props) => BUTTON_SIZES[props.size]};

  &:hover {
    background-color: ${(props) => props.color};
    color: white;
  }
`;

/**
 * Button component
 *
 * @param param0
 * @returns
 */
const Button = ({
  children,
  classes,
  onClick,
  size = "small",
  color = "#ff0055",
  ...props
}: IButtonProps): JSX.Element => {
  return (
    <StyledButton
      size={size}
      color={color}
      {...props}
      className={classnames("button", classes)}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
