import { FC } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";
import { MoveUpRight } from "lucide-react";

const GiftPresentation: FC = ({}) => {
  return (
    <div className="h-11/12 relative mt-6 md:mt-0">
      <AspectRatio ratio={16 / 8} className="relative">
        <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg" />
        <img
          src="/gift-bg.jpg"
          alt="promotion image"
          className="h-full w-full object-cover rounded-lg"
        />
      </AspectRatio>
      <div className="absolute top-1/2 left-6 transform -translate-y-1/2 space-y-12">
        <div>
          <h3 className="text-white mb-3">Buying For a Loved One?</h3>
          <p className="text-white text-xs font-medium">
            Input any displayable information of your gift here.
          </p>
        </div>
        <Link to="#" className="text-xs text-[#37a9fd] flex items-center">
          Add Gift Wrap <MoveUpRight className="size-4 text-[#37a9fd] ms-1" />
        </Link>
      </div>
    </div>
  );
};

export default GiftPresentation;
