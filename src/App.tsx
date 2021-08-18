import Routes from "./routes";
import { Navbar, Wave } from "./components";
import GlobalStyle from "./shared/GlobalStyles";

function App() {
  console.log(process.env.NODE_ENV);
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      {/* <Wave /> */}
      <Routes />
    </div>
  );
}

export default App;
