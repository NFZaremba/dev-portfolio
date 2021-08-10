import classnames from "classnames";
import { IImageProps } from "./types";
import { StyledImage } from "./styles";
import styled from "styled-components";
import { motion } from "framer-motion";

const ImageContainer = styled(motion.div)`
  position: relative;
  overflow: hidden;
  height: 100%;

  .mask {
    width: 100%;
    height: 100%;
    overflow: hidden;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #ff0055;
      animation: 0.9s cubic-bezier(0.76, 0, 0.24, 1) 0.6s both slide-out-right;
    }

    animation: 0.9s cubic-bezier(0.76, 0, 0.24, 1) 0s both slide-in-right;

    /* &::after {
      animation: 0.9s cubic-bezier(0.76, 0, 0.24, 1) 0.6s both slide-out-right;
    } */
  }

  /* .reveal-box__inner {
    animation: 0.9s cubic-bezier(0.76, 0, 0.24, 1) 0s both slide-in-right;

    &::after {
      animation: 0.9s cubic-bezier(0.76, 0, 0.24, 1) 0.6s both slide-out-right;
    }
  } */

  .image {
    animation: 1.5s cubic-bezier(0.76, 0, 0.24, 1) 0.3s both scale-in-down;
  }

  @keyframes slide-in-right {
    0% {
      transform: translate3D(-100%, 0, 0);
    }
    100% {
      transform: translate3D(0, 0, 0);
    }
  }

  @keyframes slide-out-right {
    0% {
      transform: translate3D(0, 0, 0);
    }
    100% {
      transform: translate3D(100%, 0, 0);
    }
  }

  @keyframes scale-in-down {
    0% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const Image = ({ src, alt, classes, ...props }: IImageProps): JSX.Element => {
  return (
    <ImageContainer>
      <div className="mask">
        <StyledImage
          {...props}
          src={src}
          alt={alt}
          className={classnames("image", classes)}
        />
      </div>
    </ImageContainer>
  );
};

export default Image;
