import { useInView, IntersectionOptions } from "react-intersection-observer";
import { useAnimation, AnimationControls } from "framer-motion";

const useScroll = (
  inViewObj: IntersectionOptions = { threshold: 0.3 }
): [(node?: Element | null) => void, AnimationControls] => {
  const controls = useAnimation();
  const [ref, inView] = useInView(inViewObj);

  if (inView) {
    controls.start("show");
    console.log("inView");
  } else {
    controls.start("hidden");
  }

  return [ref, controls];
};

export default useScroll;
