import React from "react";
import BannerHome from "./components/BannerHome";
import PromotionSection from "./components/PromotionSection";
import TrendingNow from "./components/TrendingNow";
import FeaturedProducts from "./components/FeaturedProducts";
import SeasonalOffers from "./components/SeasonalOffers";
import NewArraivals from "./components/NewArrivals";
import PopularProducts from "./components/PopularProducts";
import ComingSoon from "./components/ComingSoon";
import Brands from "./components/Brands";

const HomePage = () => {
  return (
    <React.Fragment>
      <BannerHome />
      <PromotionSection />
      <TrendingNow />
      <FeaturedProducts />
      <SeasonalOffers />
      <NewArraivals />
      <PopularProducts />
      <ComingSoon />
      <Brands />
    </React.Fragment>
  );
};

export default HomePage;
