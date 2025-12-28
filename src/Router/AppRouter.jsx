import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "../layout/MainLayout.jsx";
import NotFound from "../page/Not Faund/index.jsx";

const Home = lazy(() => import("../page/Home/index.jsx"));
const Blog = lazy(() => import("../page/Blog"));
const Return = lazy(() => import("../page/Return"));
const Guarantees = lazy(() => import("../page/Guarantees"));
const DeliveryAndPayment = lazy(() => import("../page/Доставка_и_оплата"));
const Contacts = lazy(() => import("../page/Contacts"));
const AboutCompany = lazy(() => import("../page/AboutCompany"));
const PopularProducts = lazy(() => import("../page/PopularProducts/index.jsx"));
const Catalog = lazy(() => import("../page/Catalog/index.jsx"));
const ProductDetail = lazy(() => import("../page/Product/index.jsx"));
const Cart = lazy(() => import("../page/Cart/index.jsx"));
const Favourites = lazy(() => import("../page/Favourites/index.jsx"));

function AppRouter() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="popular-products" element={<PopularProducts />} />
          <Route path="blog" element={<Blog />} />
          <Route path="return" element={<Return />} />
          <Route path="guarantees" element={<Guarantees />} />
          <Route path="delivery-and-payment" element={<DeliveryAndPayment />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="about-company" element={<AboutCompany />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
