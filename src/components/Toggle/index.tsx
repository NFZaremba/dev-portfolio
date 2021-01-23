import { ReactChild, useState } from "react";
// Animation
import { motion } from "framer-motion";

interface ToggleProps {
  children: ReactChild;
  title: string;
}

const Toggle: React.FC<ToggleProps> = ({ children, title }) => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </motion.div>
  );
};

export default Toggle;
