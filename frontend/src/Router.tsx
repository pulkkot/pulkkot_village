import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClassPage from "pages/ClassPage";
import MainPage from "pages/MainPage";
import ProductPage from "pages/ProductPage";
import Header from "components/navbar/Header";
import ClassAddPage from "pages/ClassAddPage";
import ClassDetailPage from "pages/ClassDetailPage";
import ProductDetailPage from "pages/ProductDetailPage";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/articles" element={<ClassPage />} />
        <Route path="/articles/:id" element={<ClassDetailPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/articles/add" element={<ClassAddPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
