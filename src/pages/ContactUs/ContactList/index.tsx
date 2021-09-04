import { AnimateSharedLayout, motion } from "framer-motion";
import { Container } from "../../../components/Navbar";
import { IBaseComponentPropsWithMotion } from "../../../shared/types";
import classnames from "classnames";
import { ItemContainer, ListContainer } from "./styles";

export interface IContactListProps extends IBaseComponentPropsWithMotion {}

const ContactList = ({ children, classes, ...props }: IContactListProps) => {
  return (
    <Container className={classnames("contact-list", classes)} {...props}>
      <AnimateSharedLayout>{children}</AnimateSharedLayout>
    </Container>
  );
};

export interface IListProps extends IBaseComponentPropsWithMotion {}

const List = ({ children, classes, ...props }: IListProps) => {
  return (
    <ListContainer
      className={classnames("contact-list__list", classes)}
      {...props}
    >
      {children}
    </ListContainer>
  );
};

export interface IItemProps extends IBaseComponentPropsWithMotion {
  color: string;
  isSelected: boolean;
  onClick: () => void;
}

const Item = ({
  color,
  isSelected,
  onClick,
  classes,
  ...props
}: IItemProps) => {
  return (
    <ItemContainer
      className={classnames("contact-list__item", classes)}
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      {isSelected && (
        <motion.div
          layoutId="outline"
          className="outline"
          initial={false}
          animate={{ borderColor: color }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
    </ItemContainer>
  );
};

ContactList.List = List;
ContactList.Item = Item;

export default ContactList;
