import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClassPage from "pages/ClassPage";
import MainPage from "pages/MainPage";
import ProductPage from "pages/ProductPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/class" element={<ClassPage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
