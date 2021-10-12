import { motion } from "framer-motion";
import { IImageProps } from "./types";

const Image = ({
  src,
  alt,
  classes,
  animation = true,
  ...props
}: IImageProps): JSX.Element => {
  return (
    <motion.div
      className="h-full w-full rounded-3xl shadow-xl"
      style={{
        background: `url(${src}) no-repeat center`,
        backgroundSize: "cover",
        backgroundBlendMode: "luminosity",
        backgroundColor: "aliceblue",
      }}
      {...props}
    ></motion.div>
  );
};

export default Image;
