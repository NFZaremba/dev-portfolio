import GlobalStyle from "./styles/GlobalStyles";
import Routes from "./routes";
import { Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
