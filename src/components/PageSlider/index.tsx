import { forwardRef } from "react";
import classnames from "classnames";
import {
  IPageSliderComp,
  IPageSliderContentProps,
  IPageSliderProps,
} from "./types";
import { Content, Header, Container, Text, Title } from "./styles";

const PageSlider = forwardRef<HTMLDivElement, IPageSliderProps>(
  ({ children, classes, ...props }: IPageSliderProps, ref): JSX.Element => {
    return (
      <Container
        ref={ref}
        className={classnames("page-slider", classes)}
        {...props}
      >
        {children}
      </Container>
    );
  }
) as IPageSliderComp;

const PageSliderTitle = ({
  children,
  classes,
  ...props
}: IPageSliderProps): JSX.Element => (
  <Title className={classnames("page-slider__title", classes)} {...props}>
    {children}
  </Title>
);

const PageSliderHeader = ({
  children,
  classes,
  ...props
}: IPageSliderProps): JSX.Element => {
  return (
    <Header className={classnames("page-slider__header", classes)} {...props}>
      {children}
    </Header>
  );
};

const PageSliderText = ({
  children,
  classes,
  ...props
}: IPageSliderProps): JSX.Element => {
  return (
    <Text className={classnames("page-slider__text", classes)} {...props}>
      {children}
    </Text>
  );
};

const PageSliderContent = ({
  children,
  classes,
  ...props
}: IPageSliderContentProps): JSX.Element => {
  return (
    <Content className={classnames("page-slider__content", classes)} {...props}>
      {children}
      {/* <PageTransition /> */}
    </Content>
  );
};

PageSlider.Title = PageSliderTitle;
PageSlider.Text = PageSliderText;
PageSlider.Header = PageSliderHeader;
PageSlider.Content = PageSliderContent;

export default PageSlider;
