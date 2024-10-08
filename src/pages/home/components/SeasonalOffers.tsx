import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface SeasonalOffer {
  image: string;
  title: string;
  description: string;
  path: string;
}

const seasonalOffers: SeasonalOffer[] = [
  {
    image: "/headphone.png",
    title: "Fall Special",
    description: "With Quality Comes Comfort",
    path: "#",
  },
  {
    image: "airbids.png",
    title: "Fall Special",
    description: "With Quality Comes Comfort",
    path: "#",
  },
];

const SeasonalOffers: React.FC = () => {
  return (
    <section className="mt-6 md:mt-8">
      <MaxWidthWrapper className="grid md:grid-cols-2 gap-4">
        {seasonalOffers.map((item, index) => (
          <div className="h-11/12 relative" key={index}>
            <AspectRatio ratio={16 / 8}>
              <img
                src={item.image}
                alt="promotion image"
                className="h-full w-full rounded-lg object-cover"
              />
            </AspectRatio>
            <div className="absolute top-1/2 left-6 transform -translate-y-1/2 space-y-12 md:space-y-32">
              <div>
                <h3 className="text-white mb-2">{item.title}</h3>
                <p className="text-primary text-xl font-medium">
                  {item.description}
                </p>
              </div>
              <Link
                to={item.path}
                className={`${buttonVariants({
                  size: "sm",
                })} text-[11px] w-28 bg-gradient-primary`}
              >
                Shop Now
              </Link>
            </div>
          </div>
        ))}
      </MaxWidthWrapper>
    </section>
  );
};

export default SeasonalOffers;
