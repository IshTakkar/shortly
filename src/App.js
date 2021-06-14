import GlobalStyle from "./GlobalStyles";
import Home from "./pages/home";
import Info from "./pages/info";
import BoostPage from "./pages/boost";
import FooterPage from "./pages/footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
      <Info />
      <BoostPage />
      <FooterPage />
    </>
  );
}

export default App;
