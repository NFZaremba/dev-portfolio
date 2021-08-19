import classnames from "classnames";
import { IImageProps } from "./types";
import { ImageContainer, ImageFrame } from "./styles";

const Image = ({ src, alt, classes, ...props }: IImageProps): JSX.Element => {
  return (
    <ImageContainer {...props} className={classnames("image", classes)}>
      <div className="mask">
        <ImageFrame src={src} alt={alt} />
      </div>
    </ImageContainer>
  );
};

export default Image;
