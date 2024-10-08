import { Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import LoginPage from "@/pages/auth/LoginPage";
import HomePage from "@/pages/home/HomePage";
import RegisterPage from "@/pages/auth/RegisterPage";
import ProductDetailsPage from "@/pages/product-details/ProductDetailsPage";
import CategoriesPage from "@/pages/categories/CategoriesPage";
import CartPage from "@/pages/cart/CartPage";
import SelectAddressPage from "@/pages/select-address/SelectAddressPage";
import AddressPage from "@/pages/address/AddressPage";
import OffersPage from "@/pages/offers/OffersPage";
import PrivacyPolicyPage from "@/pages/privacy-policy/PrivacyPolicyPage";
import TermsConditionPage from "@/pages/terms-condition/TermsConditionPage";
import ContactUsPage from "@/pages/contact-us/ContactUsPage";
import PreOrderPage from "@/pages/pre-order/PreOrderPage";
import UserAccountPage from "@/pages/user-info/UserAccountPage";
import { useAuth } from "@/contexts/AuthProvider";
import Missing from "@/components/Missing";

const Routing = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/product-details/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/select-address" element={<SelectAddressPage />} />
        <Route path="/address" element={<AddressPage />} />
        <Route
          path="/account"
          element={isAuthenticated ? <UserAccountPage /> : <LoginPage />}
        />
        <Route path="/offers" element={<OffersPage />} />
        <Route path="/pre-order" element={<PreOrderPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-condition" element={<TermsConditionPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
      </Route>

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="*" element={<Missing />} />
    </Routes>
  );
};

export default Routing;
