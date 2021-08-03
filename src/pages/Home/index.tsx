import About from "./About";
import MyWork from "./MyWork";
import ContactUs from "./ContactUs";
import ReactFullpage from "@fullpage/react-fullpage";

const Home = () => {
  return (
    <ReactFullpage
      licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={1000}
      navigation
      anchors={["firstPage", "secondPage", "thirdPage"]}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <About />
            </div>
            <div className="section">
              <MyWork />
            </div>
            <div className="section">
              <ContactUs />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default Home;
