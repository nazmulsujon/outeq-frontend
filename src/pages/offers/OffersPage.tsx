import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { OfferItem } from "@/types/global";
import OfferCard from "./components/OfferCard";
import CustomPagination from "@/components/CustomPagination";

const offers: OfferItem[] = [
  {
    id: 1,
    title: "Exclusive Deal On iPhone 16 Series",
    dateRange: "10 September, 2024 - 15 October, 2024",
    description:
      "Be the first to own the latest Apple product! Ready stock available now for the iPhone 16 Series. Enjoy exclusive offers and limited-time deals. Call +8809613048048 to place your order.",
    image: "/products/product-1.png",
  },
  {
    id: 2,
    title: "Get the latest Samsung smartphones at unbeatable prices.",
    dateRange: "01 October, 2024 - 15 October, 2024",
    description:
      "Upgrade your mobile experience with Samsung's flagship smartphones, now available at discounted rates!",
    image: "/products/product-2.png",
  },
  {
    id: 3,
    title:
      "Capture Life’s Moments in Stunning Detail with Pixel Phones - Best Price!",
    dateRange: "01 October, 2024 - 15 October, 2024",
    description:
      "From stunning low-light shots to incredible portrait modes, these smartphones offer exceptional camera capabilities. Get yours today at a limited-time discount and relive your memories in vivid detail.",
    image: "/products/product-3.jpg",
  },
];

const OffersPage: React.FC = ({}) => {
  return (
    <section className="my-6 md:my-10">
      <MaxWidthWrapper>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((offerItem, index) => (
            <OfferCard key={index} offerItem={offerItem} />
          ))}
        </div>

        <CustomPagination />
      </MaxWidthWrapper>
    </section>
  );
};

export default OffersPage;
