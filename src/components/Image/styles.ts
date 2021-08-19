import { motion } from "framer-motion";
import styled from "styled-components";

export const ImageFrame = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImageContainer = styled(motion.div)`
  position: relative;
  overflow: hidden;
  height: 100%;
  // box-shadow: 40px 35px 34px -33px rgb(0 0 0 / 70%);
  /* box-shadow: 40px 35px 26px -44px rgb(159 26 223); */
  border-radius: 1rem;
  /* box-shadow: 40px 35px 26px -44px rgb(159 26 223); */

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
      background-color: #c1b;
    }
  }

  // Triggers image reveal animation
  &.enter {
    .mask {
      animation: 0.9s cubic-bezier(0.76, 0, 0.24, 1) 0s both slide-in-right;

      &::after {
        animation: 0.9s cubic-bezier(0.76, 0, 0.24, 1) 0.6s both slide-out-right;
      }
    }

    .image {
      animation: 1.5s cubic-bezier(0.76, 0, 0.24, 1) 0.3s both scale-in-down;
    }
  }

  &.leave {
    .mask {
      animation: 0.9s cubic-bezier(0.76, 0, 0.24, 1) 0s both paused
        slide-out-right;

      &::after {
        animation: 0.9s cubic-bezier(0.76, 0, 0.24, 1) 0s both paused
          slide-in-left;
      }
    }

    .image {
      animation: 0.9s cubic-bezier(0.76, 0, 0.24, 1) 0s both paused
        slide-out-left;
    }
  }

  // animation
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

  @keyframes slide-in-left {
    0% {
      transform: translate3D(100%, 0, 0);
    }
    100% {
      transform: translate3D(0, 0, 0);
    }
  }

  @keyframes slide-out-left {
    0% {
      transform: translate3D(0, 0, 0);
    }
    100% {
      transform: translate3D(-100%, 0, 0);
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
  // end animation
`;
