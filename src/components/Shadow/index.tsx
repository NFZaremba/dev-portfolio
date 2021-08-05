import styled from "styled-components";
import { IBaseComponentProps } from "../types";
import classnames from "classnames";

interface IShadowProps extends IBaseComponentProps {}

const StyledShadow = styled.div`
  box-shadow: 0 80px 140px -40px rgb(0 0 0 / 60%);
`;

const Shadow = ({ children, classes }: IShadowProps) => {
  return (
    <StyledShadow className={classnames("shadow-container", classes)}>
      {children}
    </StyledShadow>
  );
};

export default Shadow;
