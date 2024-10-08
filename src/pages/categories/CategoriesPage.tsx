import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Category from "./components/Category";
import { products } from "@/assets/constant";

interface CategoriesPageProps {
  // Define props here
}

const CategoriesPage: React.FC<CategoriesPageProps> = ({}) => {
  return (
    <MaxWidthWrapper className="mt-4 md:mt-6">
      <Category
        categoryBanner="/banner-tv.png"
        title="TV and Smart TV & Accessories"
        products={products}
      />

      <Category
        categoryBanner="/banner-camera.png"
        title="Camera & Accessories"
        products={products}
      />

      <Category
        categoryBanner="/banner-wifi.png"
        title="Wifi & Conectivity"
        products={products}
      />

      <Category
        categoryBanner="/banner-others.png"
        title="Others Accessories"
        products={products}
      />
    </MaxWidthWrapper>
  );
};

export default CategoriesPage;
