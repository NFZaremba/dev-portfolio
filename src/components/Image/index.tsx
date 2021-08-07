import styled from "styled-components";
import { HTMLMotionProps, motion } from "framer-motion";
import classnames from "classnames";

interface IImageProps extends HTMLMotionProps<any> {
  src: string;
  alt: string;
  classes?: string;
}

export const StyledImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 40px 35px 34px -33px rgb(0 0 0 / 70%);
`;

const Image = ({ src, alt, classes, ...props }: IImageProps): JSX.Element => {
  return (
    <StyledImage
      {...props}
      src={src}
      alt={alt}
      className={classnames("image", classes)}
    />
  );
};

export default Image;
