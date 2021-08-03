import { forwardRef, ReactNode } from "react";
import { Section, Header, Title, Image, Content, Text } from "./Styles";
import { Button } from "../../shared/Styles";
import classnames from "classnames";
import { HTMLMotionProps } from "framer-motion";
import { Link, LinkProps } from "react-router-dom";

interface IPageSliderProps extends HTMLMotionProps<any> {
  children?: ReactNode;
  classes?: string;
}

interface IPageSliderImageProps extends LinkProps {
  src: string;
  alt: string;
}

type IPageSliderLinkProps = Omit<IPageSliderProps, "children"> &
  IPageSliderImageProps;

interface IPageSliderComp
  extends React.ForwardRefExoticComponent<
    IPageSliderProps & React.RefAttributes<HTMLDivElement>
  > {
  Title: React.FC<IPageSliderProps>;
  Header: React.FC<IPageSliderProps>;
  Text: React.FC<IPageSliderProps>;
  Content: React.FC<IPageSliderProps>;
  Image: React.FC<IPageSliderLinkProps>;
  Button: React.FC<IPageSliderProps>;
}

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
}: IPageSliderProps): JSX.Element => {
  return (
    <Title {...props} className={classnames("page-slider__title", classes)}>
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

PageSlider.Content = ({
  children,
  classes,
  ...props
}: IPageSliderProps): JSX.Element => {
  return (
    <Content {...props} className={classnames("page-slider__content", classes)}>
      {children}
    </Content>
  );
};

PageSlider.Image = ({
  classes,
  src,
  alt,
  to,
  ...props
}: IPageSliderLinkProps): JSX.Element => {
  return (
    <Link to={to}>
      <Image
        {...props}
        src={src}
        alt={alt}
        className={classnames("page-slider__image", classes)}
      />
    </Link>
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
