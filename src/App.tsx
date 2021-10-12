import { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { Navbar } from "./shared/components";
import Intro from "./pages/Intro";
import About from "./pages/About";
import MyWork from "./pages/MyWork";
import ContactUs from "./pages/ContactUs";

import background from "./assets/img/cool-background.svg";
import "remixicon/fonts/remixicon.css";
import "./App.css";

function App() {
  const [sectionTitle, setSectionTitle] = useState<string>("Nick Z");
  const [direction, setDirection] = useState<string>("");

  return (
    <main
      className="App"
      style={{
        background: `url(${background}) no-repeat center center fixed`,
        backgroundSize: "cover",
      }}
    >
      <Navbar sectionTitle={sectionTitle} direction={direction} />
      <ReactFullpage
        licenseKey={process.env.REACT_APP_FULL_PAGE_LICSENCE}
        navigationPosition="left"
        scrollingSpeed={1500}
        easing="easeInOutCubic"
        navigation
        onLeave={(_origin, _destination, direction) => setDirection(direction)}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <section className="section">
                <Intro setSectionTitle={setSectionTitle} />
              </section>
              <section className="section">
                <About setSectionTitle={setSectionTitle} />
              </section>
              <section className="section">
                <MyWork setSectionTitle={setSectionTitle} />
              </section>
              <section className="section">
                <ContactUs setSectionTitle={setSectionTitle} />
              </section>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </main>
  );
}

export default App;
