import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClassPage from "pages/ClassPage";
import MainPage from "pages/MainPage";
import ProductPage from "pages/ProductPage";
import Header from "components/navbar/Header";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/class" element={<ClassPage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
