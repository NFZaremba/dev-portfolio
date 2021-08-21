import { motion } from "framer-motion";
import styled from "styled-components";
import classnames from "classnames";
import { IImageProps } from "./types";
import { FrameTransition } from "..";

//* Styles
export const ImageFrame = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImageContainer = styled(motion.div)`
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
  border-radius: 1rem;
`;

//* Animations
const containerAnim = {
  hidden: {
    width: 0,
    transition: {
      duration: 2,
    },
  },
  show: {
    width: "100%",
    transition: {
      ease: [0.76, 0, 0.24, 1],
      duration: 0.9,
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
      duration: 5,
    },
  },
};

/**
 * Image component
 *
 * @param src
 * @param alt
 * @param classes
 * @param props
 * @returns
 */
const Image = ({ src, alt, classes, ...props }: IImageProps): JSX.Element => {
  return (
    <ImageContainer
      className={classnames("image", classes)}
      variants={containerAnim}
      {...props}
    >
      <FrameTransition />
      <ImageFrame variants={imageAnim} src={src} alt={alt} />
    </ImageContainer>
  );
};

export default Image;
