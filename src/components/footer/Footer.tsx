import { Separator } from "@/components/ui/separator";
import Support from "./components/Support";
import FooterNavigations from "./components/FooterNavigations";
import MaxWidthWrapper from "../MaxWidthWrapper";
import BottomFooter from "./components/BottomFooter";

const Footer: React.FC = ({}) => {
  return (
    <footer className="flex flex-col justify-between bg-primary text-white mt-6 md:mt-10 pt-6">
      <MaxWidthWrapper>
        <Support />
        <Separator className="my-6 md:my-" />
        <FooterNavigations />
      </MaxWidthWrapper>
      <BottomFooter />
    </footer>
  );
};

export default Footer;
