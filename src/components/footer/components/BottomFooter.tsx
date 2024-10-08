import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const BottomFooter: React.FC = ({}) => {
  return (
    <div className="bg-white text-black py-4">
      <MaxWidthWrapper className="flex flex-col md:flex-row justify-between items-center">
        <img className="w-20 h-14 object-cover" src="/logo.svg" alt="logo" />
        <p className="mb-2 md:mb-0">Yourwebsitelinkhere@gmail.com</p>
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <img
            className="w-12"
            src="/master-card.svg"
            alt="master card image"
          />
          <img className="w-12" src="/visa.svg" alt="visa card image" />
          <img className="w-12" src="/bkash.svg" alt="bkash card image" />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default BottomFooter;
