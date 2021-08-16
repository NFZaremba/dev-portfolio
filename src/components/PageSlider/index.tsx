import { forwardRef } from "react";
import classnames from "classnames";
import {
  IPageSliderComp,
  IPageSliderContentProps,
  IPageSliderProps,
} from "./types";
import { Content, Header, Container, SubHeader, Title } from "./styles";

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

const PageSliderSubHeader = ({
  children,
  classes,
  ...props
}: IPageSliderProps): JSX.Element => {
  return (
    <SubHeader className={classnames("page-slider__text", classes)} {...props}>
      {children}
    </SubHeader>
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
PageSlider.SubHeader = PageSliderSubHeader;
PageSlider.Header = PageSliderHeader;
PageSlider.Content = PageSliderContent;

export default PageSlider;
