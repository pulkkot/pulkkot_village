import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClassPage from "pages/ClassPage";
import MainPage from "pages/MainPage";
import ProductPage from "pages/ProductPage";
import Header from "components/navbar/Header";
import ClassAddPage from "pages/ClassAddPage";
import ClassDetailPage from "pages/ClassDetailPage";
import ProductDetailPage from "pages/ProductDetailPage";
import ProductAddPage from "pages/ProductAddPage";
import ProductOrderPage from "pages/ProductOrderPage";
import AboutPage from "pages/AboutPage";
import Footer from "components/home/Footer";
import ProjectPage from "pages/ProjectPage";
import ProjectDetail from "components/projects/ProjectDetail";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/articles" element={<ClassPage />} />
        <Route path="/articles/add" element={<ClassAddPage />} />
        <Route path="/articles/:id" element={<ClassDetailPage />} />

        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/add" element={<ProductAddPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/products/order" element={<ProductOrderPage />} />

        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
