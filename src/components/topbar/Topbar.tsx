import { FC, useState } from "react";
import { Link } from "react-router-dom";
import MaxWidthWrapper from "../MaxWidthWrapper";
import SearchBar from "./SearchBar";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileNav from "@/components/navbar/MobileNav";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { useAuth } from "@/contexts/AuthProvider";

const Topbar: FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isFocusOn, setIsFocusOn] = useState(false);
  const { isAuthenticated, user } = useAuth();

  const commands = [
    { value: "smart watch", label: "Smart Watch" },
    { value: "tws", label: "TWS" },
    { value: "speaker", label: "Speaker" },
    { value: "cable", label: "Cable" },
    { value: "calculator", label: "Calculator" },
  ];

  return (
    <section className="bg-black">
      <MaxWidthWrapper
        className={`h-full lg:h-[84px] lg:flex justify-between items-center md:space-y-3 lg:space-y-0 py-4 pb-0 md:pb-4 ${
          isFocusOn ? "hidden" : "block"
        }`}
      >
        {/* Mobile Nav */}
        <div className="flex justify-between items-center md:hidden mb-2 md:mb-0">
          <Link to="/">
            <img
              className="w-28 h-14 object-cover"
              src="/logo.svg"
              alt="logo"
            />
          </Link>

          <Button
            onClick={() => setIsMobileNavOpen(true)}
            className="px-2 text-white bg-transparent"
          >
            <Menu className="size-8" />
          </Button>
        </div>

        <div className="hidden md:flex items-center justify-between">
          <Link to="/">
            <img
              className="w-48 h-20 object-cover -ml-5"
              src="/logo.svg"
              alt="logo"
            />
          </Link>
          <SearchBar commands={commands} />
        </div>

        <div className="flex justify-between items-center space-x-2 md:space-x-4 me-2 md:me-0 text-white mb-3 md:mb-0">
          <Link
            to="/offers"
            className="leading-none flex flex-col md:flex-row items-center space-x-2 space-y-1.5 md:space-y-0 text-center md:text-left"
          >
            <img
              className="size-7"
              src="/icons/offer.svg"
              alt="shopping cart image"
            />
            <p className="font-medium text-nowrap">
              Offers <br />
              <span className="text-[10px] font-thin">latest offers</span>
            </p>
          </Link>

          <Link
            to="/cart"
            className="leading-none flex flex-col md:flex-row items-center space-x-2 space-y-1.5 md:space-y-0 text-center md:text-left"
          >
            <img
              className="size-7"
              src="/icons/cart.svg"
              alt="shopping cart image"
            />
            <p className="font-medium text-nowrap">
              Cart(0) <br />
              <span className="text-[10px] font-thin">Add to cart</span>
            </p>
          </Link>

          <Link
            to="/pre-order"
            className="leading-none flex flex-col md:flex-row items-center space-x-2 space-y-1.5 md:space-y-0 text-center md:text-left"
          >
            <img
              className="size-7"
              src="/icons/pre-order.svg"
              alt="shopping cart image"
            />
            <p className="font-medium text-nowrap">
              Pre-order <br />
              <span className="text-[10px] font-thin">Order today</span>
            </p>
          </Link>

          <Link
            to={isAuthenticated ? "/account" : "/login"}
            className="leading-none flex flex-col md:flex-row items-center space-x-2 space-y-1.5 md:space-y-0 text-center md:text-left"
          >
            <img
              className="size-7"
              src="/icons/user.svg"
              alt="shopping cart image"
            />
            <p className="font-medium text-nowrap">
              Account <br />
              <span className="text-[10px] font-thin">
                {isAuthenticated ? user?.name : "Register or Login"}
              </span>
            </p>
          </Link>
        </div>
      </MaxWidthWrapper>

      <div className="w-full px-0 md:hidden">
        {/* Search bar for mobile screen */}
        <SearchBar
          className="rounded-none border border-t-0 border-l-0 border-r-0"
          commands={commands}
          onFocusChange={setIsFocusOn}
        />
      </div>

      <Sheet open={isMobileNavOpen} onOpenChange={setIsMobileNavOpen}>
        <SheetTrigger asChild>
          <div />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-80 h-full overflow-y-auto pt-[14px]"
        >
          <SheetHeader>
            <SheetTitle className="text-start">
              <Link to="/">
                <img
                  className="w-24 h-12 object-cover -ml-4 mb-1"
                  src="/logo.svg"
                  alt="logo"
                />
              </Link>
            </SheetTitle>
            <SheetDescription className="sr-only">
              Mobile navigation
            </SheetDescription>
          </SheetHeader>
          <MobileNav />
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default Topbar;
