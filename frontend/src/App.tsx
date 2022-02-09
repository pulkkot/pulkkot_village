import MainPage from "pages/MainPage";
import ProductPage from "pages/ProductPage";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/GlobalStyles";
import theme from "styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainPage />
      <ProductPage />
    </ThemeProvider>
  );
}

export default App;
