import { StyledDivider } from "./styles";
import { IDividerProps } from "./types";

/**
 * Divider component
 *
 * @param color
 * @param width
 * @returns
 */
const Divider = ({
  color = "#ff0055",
  width = 10,
  ...props
}: IDividerProps) => {
  return (
    <div
      style={{
        width: `${width}%`,
      }}
    >
      <StyledDivider {...props} color={color} />
    </div>
  );
};

export default Divider;
