import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { OfferItem } from "@/types/global";
import { Calendar } from "lucide-react";

interface OfferCardProps {
  offerItem: OfferItem;
}

const OfferCard: React.FC<OfferCardProps> = ({ offerItem }) => {
  return (
    <Card className="w-full h-full border-none shadow-sm cursor-pointer bg-[#E1E1E1] rounded-lg">
      <CardContent className="p-0 flex flex-col justify-between items-center h-full">
        <AspectRatio
          ratio={16 / 16}
          className="w-full h-auto relative mx-auto overflow-hidden rounded-t-lg"
        >
          <img
            src={offerItem.image}
            alt={`${offerItem.title} image`}
            className="w-full h-auto"
          />
        </AspectRatio>

        <div className="space-y-2 text-center my-2 flex-grow">
          <p className="text-xs font-medium flex items-center justify-center">
            <Calendar className="size-4 mr-1" /> {offerItem.dateRange}
          </p>

          <p className="font-bold">{offerItem.title}</p>

          <p className="text-xs font-medium">{offerItem.description}</p>
        </div>

        <div className="mt-auto mb-4">
          <Button className="bg-gradient-primary rounded-lg">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default OfferCard;
