import { forwardRef } from "react";
import classnames from "classnames";
import styled from "styled-components";
import { motion } from "framer-motion";
import { IBaseComponentPropsWithMotion } from "../types";

type IPageSliderProps = IBaseComponentPropsWithMotion;

interface IPageSliderContentProps extends IPageSliderProps {
  shadow?: boolean;
}

interface IPageSliderComp
  extends React.ForwardRefExoticComponent<
    IPageSliderProps & React.RefAttributes<HTMLDivElement>
  > {
  Title: React.FC<IPageSliderProps>;
  Header: React.FC<IPageSliderProps>;
  Text: React.FC<IPageSliderProps>;
  Content: React.FC<IPageSliderContentProps>;
}

export const Section = styled(motion.section)`
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

export const Title = styled(motion.div)`
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

export const Header = styled(motion.h2)`
  font-size: 8rem;
  line-height: 1;
  letter-spacing: 0.1em;
  margin-bottom: 1.6rem;
  font-weight: normal;
  text-shadow: 2px 3px 16px rgb(0 0 0);
`;

export const Content = styled(motion.div)<{ shadow: boolean }>`
  width: 60%;
  height: 70vh;
  overflow: hidden;
  margin: 0px 8% 0 auto;
  align-items: center;
  justify-content: center;
  box-shadow: ${(props) =>
    props.shadow ? "0 80px 140px -40px rgb(0 0 0 / 60%)" : "none"};
`;

export const Text = styled(motion.p)`
  padding-bottom: 3rem;
  color: #ccc;
  font-size: 1.4rem;
  line-height: 150%;
`;

const PageSlider = forwardRef<HTMLDivElement, IPageSliderProps>(
  ({ children, classes, ...props }: IPageSliderProps, ref): JSX.Element => {
    return (
      <Section
        ref={ref}
        {...props}
        className={classnames("page-slider", classes)}
      >
        {children}
      </Section>
    );
  }
) as IPageSliderComp;

PageSlider.Title = ({
  children,
  classes,
  ...props
}: IPageSliderProps): JSX.Element => (
  <Title {...props} className={classnames("page-slider__title", classes)}>
    {children}
  </Title>
);

PageSlider.Header = ({
  children,
  classes,
  ...props
}: IPageSliderProps): JSX.Element => {
  return (
    <Header {...props} className={classnames("page-slider__header", classes)}>
      {children}
    </Header>
  );
};

PageSlider.Text = ({
  children,
  classes,
  ...props
}: IPageSliderProps): JSX.Element => {
  return (
    <Text {...props} className={classnames("page-slider__text", classes)}>
      {children}
    </Text>
  );
};

PageSlider.Content = ({
  children,
  classes,
  shadow = false,
  ...props
}: IPageSliderContentProps): JSX.Element => {
  return (
    <Content
      shadow={shadow}
      {...props}
      className={classnames("page-slider__content", classes)}
    >
      {children}
    </Content>
  );
};

export default PageSlider;
