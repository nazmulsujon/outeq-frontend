import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <MaxWidthWrapper className="my-6 md:my-12 flex flex-col justify-center items-center space-y-3">
      <img src="/empty-cart.png" alt="Empty cart" />
      <h2 className="text-2xl font-bold">
        Your Cart is <span className="text-[#37a9fd]">Empty</span>
      </h2>
      <p>Must add items on the cart before you proceed to check out</p>
      <Link
        to="/"
        className={`${buttonVariants({
          size: "sm",
        })} bg-gradient-primary`}
      >
        Return Home
      </Link>
    </MaxWidthWrapper>
  );
};

export default EmptyCart;
