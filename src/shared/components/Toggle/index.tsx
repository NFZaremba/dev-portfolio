import { motion } from "framer-motion";
import { IBaseComponentPropsWithMotion } from "../../types";

interface IPath extends IBaseComponentPropsWithMotion {
  d?: string;
}

const Path = (props: IPath) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

interface IToggle extends IBaseComponentPropsWithMotion {
  toggle: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export const Toggle = ({
  toggle,
  className = "",
  style,
  ...props
}: IToggle) => (
  <motion.button
    style={style}
    className={`animate-pulse flex justify-center items-center outline-none border-none cursor-pointer absolute rounded-full -bottom-14 left-2/4 transform -translate-x-2/4 ${className} p-4 `}
    onClick={toggle}
    {...props}
  >
    <svg
      className="w-6 h-6 mx-auto "
      style={{
        top: "calc(50% - 24px)",
        left: "calc(50% - 24px)",
      }}
      viewBox="0 0 23 23"
    >
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </motion.button>
);

export default Toggle;
