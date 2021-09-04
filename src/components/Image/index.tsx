import classnames from "classnames";
import { IImageProps } from "./types";
import { FrameTransition } from "..";
import { Container, ImageFrame } from "./styles";

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

/**
 * Image component
 *
 * @param src
 * @param alt
 * @param classes
 * @param props
 * @returns
 */
const Image = ({
  src,
  alt,
  classes,
  animation = true,
  ...props
}: IImageProps): JSX.Element => {
  return (
    <Container
      className={classnames("image", classes)}
      variants={containerAnim}
      {...props}
    >
      {animation ? <FrameTransition /> : null}
      <ImageFrame variants={imageAnim} src={src} alt={alt} />
    </Container>
  );
};

export default Image;
