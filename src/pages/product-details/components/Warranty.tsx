import { WarrantyType } from "@/types/global";

interface WarrantyProps {
  warranty: WarrantyType;
}

const Warranty: React.FC<WarrantyProps> = ({ warranty }) => {
  return (
    <div className="w-full bg-slate-50 mt-6 p-4 rounded-md space-y-6 md:px-8 lg:pr-28">
      <h2 className="text-xl font-semibold mb-4 text-[#37a9fd]">Warranty</h2>
      <div className="text-sm space-y-2">
        <p className="font-bold">{warranty.support}</p>
        <p>{warranty.policy}</p>
      </div>
    </div>
  );
};

export default Warranty;
