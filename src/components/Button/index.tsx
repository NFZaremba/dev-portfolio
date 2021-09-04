import classnames from "classnames";
import { IButtonProps } from "./types";
import { Container } from "./styles";

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
  color = "#c1b",
  ...props
}: IButtonProps): JSX.Element => {
  return (
    <Container
      size={size}
      color={color}
      {...props}
      className={classnames("button", classes)}
      onClick={onClick}
    >
      {children}
    </Container>
  );
};

export default Button;
