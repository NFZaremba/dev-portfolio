import GlobalStyle from "./styles/GlobalStyles";
import AboutUs from "./pages/AboutUs";
import { Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <AboutUs />
    </div>
  );
}

export default App;
