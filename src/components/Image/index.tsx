import classnames from "classnames";
import { IImageProps } from "./types";
import { ImageContainer, ImageFrame } from "./styles";
import { FrameTransition } from "..";

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
