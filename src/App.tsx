import Routes from "./routes";
import { Navbar, ScrollTop, Wave } from "./components";
import GlobalStyle from "./shared/GlobalStyles";

function App() {
  console.log(process.env.NODE_ENV);
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Wave />
      {/* <ScrollTop /> */}
      <Routes />
    </div>
  );
}

export default App;
