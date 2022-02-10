import ToastEditor from "components/editor/ToastEditor";
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
      <ToastEditor />
      <ProductPage />
    </ThemeProvider>
  );
}

export default App;
