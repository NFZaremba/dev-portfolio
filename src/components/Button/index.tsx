import classnames from "classnames";
import { IButtonProps } from "./types";
import { StyledButton } from "./styles";

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
