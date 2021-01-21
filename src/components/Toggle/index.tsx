import { ReactChild, useState } from "react";

const Toggle = ({ children }: { children: ReactChild }) => {
  const [toggle, setToggle] = useState<boolean>(true);

  return <div onClick={() => setToggle(!toggle)}>{toggle ? children : ""}</div>;
};

export default Toggle;
