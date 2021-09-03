import classnames from "classnames";
import { IBaseComponentPropsWithMotion } from "../../../shared/types";
import { IProfileData } from "../__data__";
import {
  Background,
  Container,
  ExpandedCard,
  ExpandedContainer,
  Title,
  Text,
  Overlay,
  ListItem,
} from "./styles";

export interface IProfileCardProps extends IBaseComponentPropsWithMotion {}

const ProfileCard = ({
  id,
  children,
  classes,
  onClick,
  ...props
}: IProfileCardProps) => {
  return (
    <Container
      className={classnames("Profile-Card", classes)}
      onClick={onClick}
      {...props}
    >
      <Background
        className="expanded-card__background"
        layoutId={`background-${id}`}
      />
      {children}
    </Container>
  );
};

export interface IProfileHeaderProps extends IBaseComponentPropsWithMotion {}

const Header = ({ id, children, ...props }: IProfileHeaderProps) => {
  return (
    <Title
      className="expanded-card__title"
      layoutId={`title-${id}`}
      layout
      {...props}
    >
      {children}
    </Title>
  );
};

export interface IExpandedProps {
  item: IProfileData | undefined;
  onClick: () => void;
}

const Expanded = ({ item, onClick }: IExpandedProps) => {
  //   const item = profileData.find((item) => item.id === id);
  return (
    <>
      <ExpandedContainer className="expanded__container ">
        <ExpandedCard
          key={item?.id}
          className="expanded-card open"
          layoutId={`container-${item?.id}`}
        >
          <Background
            className="expanded-card__background"
            layoutId={`background-${item?.id}`}
            style={{ height: "22%" }}
          />
          <Header
            className="expanded-card__title open"
            layoutId={`title-${item?.id}`}
            layout
          >
            <h3>{item?.title}</h3>
          </Header>
          <Text className="expanded-card__text open" animate>
            <div>
              {item?.list.map((text: string) => (
                <ListItem className="expanded-card__list-item">
                  <i className="ri-checkbox-circle-fill"></i>
                  <p>{text}</p>
                </ListItem>
              ))}
            </div>
          </Text>
        </ExpandedCard>
      </ExpandedContainer>
      <Overlay
        className="modal__overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
        transition={{ duration: 0.2, delay: 0.2 }}
        onClick={onClick}
      />
    </>
  );
};

ProfileCard.Expanded = Expanded;
ProfileCard.Header = Header;

export default ProfileCard;
