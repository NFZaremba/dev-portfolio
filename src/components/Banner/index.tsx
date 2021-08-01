import buildings1 from "../../assets/img/SVG/buildings1.svg";
import buildings2 from "../../assets/img/SVG/buildings2.svg";
import house1 from "../../assets/img/SVG/house1.svg";
import house2 from "../../assets/img/SVG/house2.svg";
import roof from "../../assets/img/SVG/roof.svg";

import styled from "styled-components";
import { useViewportScroll, motion, useTransform } from "framer-motion";

const BannerContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-height: 50rem;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Banner = () => {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [5, 500], [5, 300]);
  const y2 = useTransform(scrollY, [5, 500], [5, 200]);
  const y3 = useTransform(scrollY, [5, 500], [5, 250]);

  return (
    <BannerContainer>
      <motion.div style={{ y: y2 }} className="stars"></motion.div>
      <motion.div style={{ y: y2 }} className="twinkling"></motion.div>
      <motion.img
        style={{ y: y2, mixBlendMode: "screen" }}
        className="parallax "
        src={buildings2}
        alt="buildings2"
      />
      <motion.img
        style={{ y: y3 }}
        className="parallax "
        src={buildings1}
        alt="buildings1"
      />

      <motion.img
        style={{ y: y1 }}
        className="parallax "
        src={house2}
        alt="house2"
      />
      <motion.img
        style={{ y: y1 }}
        className="parallax "
        src={house1}
        alt="house1"
      />
      <motion.img
        // style={{ y: y1 }}
        className="parallax "
        src={roof}
        alt="roof"
      />
    </BannerContainer>
  );
};

export default Banner;
