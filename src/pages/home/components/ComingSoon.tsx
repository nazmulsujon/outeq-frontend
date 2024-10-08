import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";

const item: {
  image: string;
  title: string;
  description: string;
  path: string;
} = {
  image: "/gaming-console.png",
  title: "Coming Soon",
  description: "Latest Gaming Console",
  path: "#",
};

const ComingSoon: React.FC = () => {
  return (
    <section className="mt-6">
      <MaxWidthWrapper className="">
        <div className="relative">
          <AspectRatio ratio={window.innerWidth >= 1024 ? 16 / 6 : 16 / 8}>
            <img
              src={item.image}
              alt="promotion image"
              className="h-full w-full rounded-lg"
            />
          </AspectRatio>

          <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 space-y-6 md:space-y-32 lg:space-y-60">
            <div>
              <h3 className="md:text-xl text-white mb-1 md:mb-2">
                {item.title}
              </h3>
              <p className="text-primary md:text-xl font-medium leading-snug md:leading-none">
                {item.description}
              </p>
            </div>
            <Link
              to={item.path}
              className={`${buttonVariants({
                size: "sm",
              })} text-[11px] w-28 bg-gradient-primary`}
            >
              View Details
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ComingSoon;
