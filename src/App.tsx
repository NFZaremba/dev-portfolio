import { Navbar } from "./shared/components";
import ReactFullpage from "@fullpage/react-fullpage";
import Intro from "./pages/Intro";
import About from "./pages/About";
import MyWork from "./pages/MyWork";
import ContactUs from "./pages/ContactUs";

import background from "./assets/img/cool-background.svg";
import "remixicon/fonts/remixicon.css";
import "./App.css";
import { useState } from "react";

function App() {
  const [sectionTitle, setSectionTitle] = useState<string>("Nick Zaremba");

  return (
    <div
      className="App"
      style={{
        background: `url(${background}) no-repeat center center fixed`,
        backgroundSize: "cover",
      }}
    >
      <Navbar sectionTitle={sectionTitle} />
      <ReactFullpage
        licenseKey={"YOUR_KEY_HERE"}
        navigationPosition="left"
        scrollingSpeed={1500}
        easing="easeInOutCubic"
        navigation
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Intro
                  moveDown={() => fullpageApi.moveTo(2, 0)}
                  setSectionTitle={setSectionTitle}
                />
              </div>
              <div className="section">
                <About setSectionTitle={setSectionTitle} />
              </div>
              <div className="section">
                <MyWork setSectionTitle={setSectionTitle} />
              </div>
              <div className="section">
                <ContactUs
                  moveUp={() => fullpageApi.moveTo(1, 0)}
                  setSectionTitle={setSectionTitle}
                />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
}

export default App;
