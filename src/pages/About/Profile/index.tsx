import classnames from "classnames";
import { IBaseComponentPropsWithMotion } from "../../../shared/types";

import { Container, Icon, Layout } from "./styles";

// const cardAnim = {
//   hidden: {
//     width: "0%",
//     opacity: 0,
//     transition: {
//       duration: 1,
//     },
//   },
//   show: (index: number) => ({
//     opacity: 1,
//     width: "100%",
//     transition: {
//       type: "spring",
//       stiffness: 300,
//       damping: 20,
//       delay: index * 0.3,
//     },
//   }),
// };

// const Modal = ({ id, onClick }: { id: string; onClick: () => void }) => {
//   const item = profileData.find((item) => item.id === id);
//   return (
//     <>
//       <CardExpandedContainer className="expanded__container ">
//         <CardExpanded
//           key={id}
//           className="expanded-card open"
//           layoutId={`container-${id}`}
//         >
//           <CardContent
//             className="expanded-card__content"
//             layoutId={`content-${id}`}
//             style={{ height: "22%" }}
//           />
//           <CardTitle
//             className="expanded-card__title open"
//             layoutId={`title-${id}`}
//             layout
//           >
//             <h3>{item?.title}</h3>
//           </CardTitle>
//           <CardText animate>
//             <div>
//               {item?.list.map((text) => (
//                 <ListItem>
//                   <i className="ri-checkbox-circle-fill"></i>
//                   <p>{text}</p>
//                 </ListItem>
//               ))}
//             </div>
//           </CardText>
//         </CardExpanded>
//       </CardExpandedContainer>
//       <Overlay
//         className="modal__overlay"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.8 }}
//         exit={{ opacity: 0, transition: { duration: 0.5 } }}
//         transition={{ duration: 0.2, delay: 0.2 }}
//         onClick={onClick}
//       />
//     </>
//   );
// };

// interface IProfileProps {
//   profileData: IProfileData[];
//   inView: boolean;
// }

// const Profile: React.FC<IProfileProps> = ({ profileData, inView }) => {
//   const [selectedId, setSelectedId] = useState<string | null>(null);
//   const [animateList, setAnimateList] = useState<boolean>(false);
//   const animation = useAnimation();

//   useEffect(() => {
//     if (!inView) {
//       animation.stop();
//       setSelectedId(null);
//       setAnimateList(false);
//     }

//     async function sequence() {
//       setAnimateList(false);
//       await animation.start({
//         top: "50%",
//         left: "125%",
//         scale: 0.5,
//         opacity: 0,
//       });
//       await animation.start({
//         scale: 1.5,
//         opacity: 1,
//         transition: { duration: 0.9 },
//       });
//       await animation.start({
//         scale: 1,
//         transition: { duration: 0.7 },
//       });
//       await animation.start({
//         top: 0,
//         left: 0,
//         transition: { duration: 0.7 },
//       });
//       setAnimateList(true);
//     }
//     if (inView) {
//       sequence();
//     }
//   }, [inView, animation]);

//   return (
//     <ProfileContainer className="profile-container">
//       <AnimateSharedLayout>
//         <Layout className="layout__grid">
//           <ProfileIcon
//             animate={animation}
//             image={profile}
//             className="profile-icon layout__item"
//           />
//           {profileData.map(({ id, title }, index) => (
//             <CardContainer
//               key={id}
//               className="layout__item"
//               layoutId={`container-${id}`}
//               onClick={() => setSelectedId(id)}
//               variants={cardAnim}
//               custom={index}
//               initial="hidden"
//               animate={animateList ? "show" : "hidden"}
//             >
//               <CardContent layoutId={`content-${id}`}></CardContent>
//               <CardTitle layout layoutId={`title-${id}`}>
//                 <h3>{title}</h3>
//               </CardTitle>
//             </CardContainer>
//           ))}
//         </Layout>

//         <AnimatePresence>
//           {selectedId && (
//             <Modal id={selectedId} onClick={() => setSelectedId(null)} />
//           )}
//         </AnimatePresence>
//       </AnimateSharedLayout>
//     </ProfileContainer>
//   );
// };

export interface IProfile extends IBaseComponentPropsWithMotion {}

const Profile = ({ children, classes, ...props }: IProfile) => {
  return (
    <Container className={classnames("Profile__container", classes)} {...props}>
      {children}
    </Container>
  );
};

export interface IProfileLayoutProps extends IBaseComponentPropsWithMotion {}

const ProfileLayout = ({
  children,
  classes,
  ...props
}: IProfileLayoutProps) => {
  return (
    <Layout className={classnames("Profile__layout", classes)} {...props}>
      {children}
    </Layout>
  );
};
export interface IProfileIcon extends IBaseComponentPropsWithMotion {
  image: string;
}

const ProfileIcon = ({ classes, image, ...props }: IProfileIcon) => {
  return (
    <Icon
      className={classnames("Profile__icon", classes)}
      image={image}
      {...props}
    ></Icon>
  );
};

Profile.Layout = ProfileLayout;
Profile.Icon = ProfileIcon;

export default Profile;
