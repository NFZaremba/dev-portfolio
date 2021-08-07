import styled from "styled-components";
import { motion } from "framer-motion";
import { IBaseComponentPropsWithMotion } from "../types";

interface IDividerProps
  extends Omit<IBaseComponentPropsWithMotion, "children"> {
  color?: string;
}

const StyledDivider = styled(motion.div)<{ color: string }>`
  height: 0.2rem;
  background: ${(props) => props.color};
  margin-bottom: 3rem;
`;

const Divider = ({ color = "#ff0055", ...props }: IDividerProps) => {
  return <StyledDivider {...props} color={color} />;
};

export default Divider;
