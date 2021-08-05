import { ReactNode } from "react";
import classnames from "classnames";
import { HTMLMotionProps, motion } from "framer-motion";
import styled from "styled-components";

const BUTTON_SIZES = {
  small: "12em",
  large: "18em",
  full: "100%",
};

type ButtonSizes = "small" | "large" | "full";

interface IButtonProps extends HTMLMotionProps<any> {
  children: ReactNode;
  classes?: string;
  size?: ButtonSizes;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const StyledButton = styled(motion.button)<{ size: ButtonSizes }>`
  font-family: "Inter", sans-serif;
  font-weight: bold;
  font-size: 1.1 rem;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 3px solid #23d997;
  background: transparent;
  color: white;
  transition: all 0.5s ease;
  width: ${(props) => BUTTON_SIZES[props.size]};

  &:hover {
    background-color: #23d997;
    color: white;
  }
`;

const Button = ({
  children,
  classes,
  onClick,
  size = "small",
  ...props
}: IButtonProps): JSX.Element => {
  return (
    <StyledButton
      size={size}
      {...props}
      className={classnames("button", classes)}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
