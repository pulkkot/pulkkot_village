import MainLayout from "components/home/MainLayout";
import ProductAdd from "components/products/ProductAdd";
import ProductList from "components/products/ProductList";

function ProductPage() {
  return (
    <MainLayout>
      {/* <ProductAdd /> */}
      <ProductList />
    </MainLayout>
  );
}

export default ProductPage;
