// Components
import Routes from "./routes";
import { Navbar } from "./components";
// Styles
import GlobalStyle from "./shared/GlobalStyles";

function App() {
  console.log(process.env.NODE_ENV);
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
