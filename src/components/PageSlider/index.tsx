import { forwardRef } from "react";
import classnames from "classnames";

import {
  IPageSliderComp,
  IPageSliderContentProps,
  IPageSliderProps,
} from "./types";
import {
  StyledContent,
  StyledHeader,
  StyledPageSlider,
  StyledText,
  StyledTitle,
} from "./styles";

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
