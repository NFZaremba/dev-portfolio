import { ReactNode } from "react";
import { Section, Header, Title, Image, ImageLink } from "./Styles";
import { Text, Button } from "../../shared/Styles";
import classnames from "classnames";
import { HTMLMotionProps } from "framer-motion";
import { LinkProps } from "react-router-dom";

interface IPageSliderProps extends HTMLMotionProps<any> {
  children?: ReactNode;
  classes?: string;
}

interface IPageSliderImageProps extends Omit<IPageSliderProps, "children"> {
  src: string;
  alt: string;
}

type IPageSliderLinkProps = Omit<IPageSliderProps, "children"> & LinkProps;

// interface IPageSliderComp {
//   Title: React.FC<IPageSliderProps>;
//   Header: React.FC<IPageSliderProps>;
//   Image: React.FC<IPageSliderProps>;
//   Text: React.FC<IPageSliderProps>;
//   Button: React.FC<IPageSliderProps>;
//   Anchor: React.FC<IPageSliderProps>;
// }

const PageSlider = ({ children, classes }: IPageSliderProps): JSX.Element => {
  return (
    <Section className={classnames("page-slider", classes)}>{children}</Section>
  );
};

PageSlider.Title = ({ children, classes }: IPageSliderProps): JSX.Element => {
  return (
    <Title className={classnames("page-slider__title", classes)}>
      {children}
    </Title>
  );
};

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

PageSlider.ImageLink = ({
  children,
  classes,
  to,
  ...props
}: IPageSliderLinkProps): JSX.Element => {
  return (
    <ImageLink
      {...props}
      to={to}
      className={classnames("page-slider__text", classes)}
    >
      {children}
    </ImageLink>
  );
};

PageSlider.Image = ({
  classes,
  src,
  alt,
  ...props
}: IPageSliderImageProps): JSX.Element => {
  return (
    <Image
      {...props}
      src={src}
      alt={alt}
      className={classnames("page-slider__image", classes)}
    />
  );
};

PageSlider.Button = ({
  children,
  classes,
  ...props
}: IPageSliderProps): JSX.Element => {
  return (
    <Button {...props} className={classnames("page-slider__image", classes)}>
      {children}
    </Button>
  );
};

export default PageSlider;
