import About from "../About";
import MyWork from "../MyWork";
import ContactUs from "../ContactUs";
import Intro from "../Intro";
import ReactFullpage from "@fullpage/react-fullpage";

const Home = () => {
  return (
    <ReactFullpage
      licenseKey={"YOUR_KEY_HERE"}
      navigationPosition="left"
      scrollingSpeed={1500}
      easing="easeInOutCubic"
      navigation
      // anchors={["firstPage", "secondPage", "thirdPage"]}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <Intro moveDown={() => fullpageApi.moveTo(2, 0)} />
            </div>
            <div className="section">
              <About />
            </div>
            <div className="section">
              <MyWork />
            </div>
            <div className="section">
              <ContactUs moveUp={() => fullpageApi.moveTo(1, 0)} />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default Home;
