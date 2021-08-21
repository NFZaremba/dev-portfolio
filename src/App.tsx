import { Navbar } from "./components";
import GlobalStyle from "./shared/GlobalStyles";
import ReactFullpage from "@fullpage/react-fullpage";
import Intro from "./pages/Intro";
import About from "./pages/About";
import MyWork from "./pages/MyWork";
import ContactUs from "./pages/ContactUs";

function App() {
  console.log(process.env.NODE_ENV);
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <ReactFullpage
        licenseKey={"YOUR_KEY_HERE"}
        navigationPosition="left"
        scrollingSpeed={1500}
        easing="easeInOutCubic"
        navigation
        render={({ state, fullpageApi }) => {
          console.log(state);
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
    </div>
  );
}

export default App;
