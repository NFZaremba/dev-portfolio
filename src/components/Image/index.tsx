import classnames from "classnames";
import { IImageProps } from "./types";
import { ImageContainer, StyledImage } from "./styles";

const Image = ({ src, alt, classes, ...props }: IImageProps): JSX.Element => {
  return (
    <ImageContainer className={classnames("image", classes)}>
      <div className="mask">
        <StyledImage {...props} src={src} alt={alt} />
      </div>
    </ImageContainer>
  );
};

export default Image;
