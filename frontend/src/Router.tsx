import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClassPage from "pages/ClassPage";
import MainPage from "pages/MainPage";
import ProductPage from "pages/ProductPage";
import Header from "components/navbar/Header";
import ClassAddPage from "pages/ClassAddPage";
import ClassDetail from "components/class/ClassDetail";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/articles" element={<ClassPage />} />
        <Route path="/articles/:id" element={<ClassDetail />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/articles/add" element={<ClassAddPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
