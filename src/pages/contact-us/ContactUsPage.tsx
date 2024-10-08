import MapComponent from "@/components/MapComponent";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Link } from "react-router-dom";
import GetInTouchForm from "./components/GetInTouchForm";

interface ContactUsPageProps {
  // Define props here
}

const ContactUsPage: React.FC<ContactUsPageProps> = ({}) => {
  return (
    <section>
      <MaxWidthWrapper>
        <MapComponent />

        <h2 className="text-2xl font-bold text-center my-2 md:my-10">
          Contact Us
        </h2>

        <div className="flex flex-col-reverse md:grid grid-cols-12 gap-4 md:gap-12">
          <div className="col-span-6 space-y-2 md:space-y-4">
            <h4 className="text-xl text-center md:text-left">
              Visit Our Store
            </h4>
            <p className="text-xs leading-loose">
              <span className="font-bold text-sm">Address</span> <br />
              Basement 2, Shop 26,Bashundhara City Shopping Complex
            </p>

            <p className="text-xs leading-loose">
              <span className="font-bold text-sm">Phone</span>
              <br /> 01234567894
            </p>

            <p className="text-xs leading-loose">
              <span className="font-bold text-sm">Email</span>
              <br /> your@emailhere.com
            </p>
            <div>
              <ul className="flex justify-center md:justify-start items-center space-x-2 mt-4">
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
          <div className="col-span-6 space-y-4">
            <h4 className="text-center md:text-left text-xl">Get In Touch</h4>
            <p className="text-center md:text-left text-xs">
              If you’ve got great products your making or looking to work with
              us then drop us a line.
            </p>

            <GetInTouchForm />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ContactUsPage;
