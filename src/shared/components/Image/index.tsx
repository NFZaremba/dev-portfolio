import classnames from "classnames";
import { IImageProps } from "./types";
import { FrameTransition } from "..";
import { Container, ImageFrame } from "./styles";
import { motion } from "framer-motion";

const containerAnim = {
  hidden: {
    width: 0,
    transition: {
      duration: 0.6,
    },
  },
  show: {
    width: "100%",
    transition: {
      ease: [0.76, 0, 0.24, 1],
      duration: 1,
    },
  },
};

const imageAnim = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const Image = ({
  src,
  alt,
  classes,
  animation = true,
  ...props
}: IImageProps): JSX.Element => {
  return (
    <motion.div
      className="relative overflow-hidden h-full w-full z-0 bg-gray-700 rounded-3xl"
      variants={containerAnim}
      style={{
        background: `url(${src}) no-repeat center`,
        backgroundSize: "cover",
        backgroundBlendMode: "luminosity",
        backgroundColor: "aliceblue",
      }}
      {...props}
    >
      {animation ? <FrameTransition /> : null}
      {/* <ImageFrame variants={imageAnim} src={src} alt={alt} /> */}
    </motion.div>
  );
};

export default Image;
