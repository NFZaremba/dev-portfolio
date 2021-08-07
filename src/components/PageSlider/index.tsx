import { forwardRef } from "react";
import classnames from "classnames";
import styled from "styled-components";
import { motion } from "framer-motion";
import { IBaseComponentPropsWithMotion } from "../types";

type IPageSliderProps = IBaseComponentPropsWithMotion;

interface IPageSliderContentProps extends IPageSliderProps {}

interface IPageSliderComp
  extends React.ForwardRefExoticComponent<
    IPageSliderProps & React.RefAttributes<HTMLDivElement>
  > {
  Title: React.FC<IPageSliderProps>;
  Header: React.FC<IPageSliderProps>;
  Text: React.FC<IPageSliderProps>;
  Content: React.FC<IPageSliderContentProps>;
}

export const StyledPageSlider = styled(motion.section)`
  height: 100vh;
  display: flex;
  align-items: center;
  color: white;

  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

export const StyledTitle = styled(motion.div)`
  position: absolute;
  z-index: 999;
  overflow: hidden;
  top: 20%;
  margin-left: 10%;

  @media (max-width: 1300px) {
    padding: 0;
    h2 {
      font-size: 4rem;
    }
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

export const StyledHeader = styled(motion.h2)`
  font-size: 8rem;
  line-height: 1;
  letter-spacing: 0.1em;
  margin-bottom: 1.6rem;
  font-weight: normal;
  text-shadow: 2px 3px 16px rgb(0 0 0);
`;

export const StyledContent = styled(motion.div)`
  position: relative;
  width: 60%;
  height: 80vh;
  overflow: hidden;
  margin: 0px 8% 0 auto;
  align-items: center;
  justify-content: center;
  padding: 2em;
`;

export const StyledText = styled(motion.p)`
  padding-bottom: 3rem;
  color: #ccc;
  font-size: 1.4rem;
  line-height: 150%;
`;

/**
 * PageSlider
 *
 *  Component that utilizez the full page library
 */
const PageSlider = forwardRef<HTMLDivElement, IPageSliderProps>(
  ({ children, classes, ...props }: IPageSliderProps, ref): JSX.Element => {
    return (
      <StyledPageSlider
        ref={ref}
        {...props}
        className={classnames("page-slider", classes)}
      >
        {children}
      </StyledPageSlider>
    );
  }
) as IPageSliderComp;

const Title = ({
  children,
  classes,
  ...props
}: IPageSliderProps): JSX.Element => (
  <StyledTitle {...props} className={classnames("page-slider__title", classes)}>
    {children}
  </StyledTitle>
);

const Header = ({
  children,
  classes,
  ...props
}: IPageSliderProps): JSX.Element => {
  return (
    <StyledHeader
      {...props}
      className={classnames("page-slider__header", classes)}
    >
      {children}
    </StyledHeader>
  );
};

const Text = ({
  children,
  classes,
  ...props
}: IPageSliderProps): JSX.Element => {
  return (
    <StyledText {...props} className={classnames("page-slider__text", classes)}>
      {children}
    </StyledText>
  );
};

const Content = ({
  children,
  classes,
  ...props
}: IPageSliderContentProps): JSX.Element => {
  return (
    <StyledContent
      {...props}
      className={classnames("page-slider__content", classes)}
    >
      {children}
      {/* <PageTransition /> */}
    </StyledContent>
  );
};

PageSlider.Title = Title;
PageSlider.Text = Text;
PageSlider.Header = Header;
PageSlider.Content = Content;

export default PageSlider;
