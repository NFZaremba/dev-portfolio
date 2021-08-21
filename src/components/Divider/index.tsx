import styled from "styled-components";
import { motion } from "framer-motion";
import { IDividerProps } from "./types";

//* Styles
export const StyledDivider = styled(motion.div)<{ color: string }>`
  height: 0.2rem;
  background: ${(props) => props.color};
  margin-bottom: 2.5rem;
`;

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
