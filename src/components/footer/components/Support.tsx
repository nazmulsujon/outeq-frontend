import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Support: React.FC = ({}) => {
  return (
    <div className="grid md:grid-cols-4 gap-4 md:gap-32">
      <div>
        <h5 className="mb-4">Support:</h5>
        <div className="space-y-4">
          <div className="border flex items-center space-x-2 font-thin text-xs w-fit p-1 px-2 rounded-lg">
            <Phone />
            <Separator orientation="vertical" className="h-full min-h-8" />
            <div className="space-y-1">
              <p>9AM - 10PM</p>
              <p>+012 3456 789</p>
            </div>
          </div>
          <div className="border flex items-center space-x-2 font-thin text-xs w-fit p-1 px-2 rounded-lg">
            <Phone />
            <Separator orientation="vertical" className="h-full min-h-8" />
            <div className="space-y-1">
              <p>Our Location</p>
              <Link to="#">Find Our Store</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-2 space-y-4">
        <h5>JOIN OUR NEWS LETTER</h5>
        <p>
          Be the first to know about our latest updates, exclusive offers, and
          more.
        </p>

        <div className="flex w-full items-center space-x-2">
          <Input
            type="email"
            placeholder="Enter your email"
            className="placeholder:text-white"
          />
          <Button
            variant="secondary"
            type="submit"
            className="bg-foreground/75 text-white hover:bg-foreground/60"
          >
            Subscribe
          </Button>
        </div>
      </div>

      <div>
        <h5 className="mb-2">Follow us on:</h5>
        <ul className="flex items-center space-x-2">
          <li>
            <Link to="#">
              <img
                className="size-5"
                src="/icons/facebook.svg"
                alt="facebook icon"
              />
            </Link>
          </li>
          <li>
            <Link to="#">
              <img
                className="size-5"
                src="/icons/twitter.svg"
                alt="twitter icon"
              />
            </Link>
          </li>
          <li>
            <Link to="#">
              <img
                className="size-5"
                src="/icons/instagram.svg"
                alt="instagram icon"
              />
            </Link>
          </li>

          <li>
            <Link to="#">
              <img
                className="size-5"
                src="/icons/linkedin.svg"
                alt="linkedin icon"
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Support;
