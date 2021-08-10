import { StyledDivider } from "./styles";
import { IDividerProps } from "./types";

const Divider = ({
  color = "#ff0055",
  width = 10,
  ...props
}: IDividerProps) => {
  return (
    <div
      style={{
        width: `${width}rem`,
      }}
    >
      <StyledDivider {...props} color={color} />
    </div>
  );
};

export default Divider;
