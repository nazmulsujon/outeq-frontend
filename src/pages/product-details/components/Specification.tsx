import { SpecificationType } from "@/types/global";

interface SpecificationProps {
  specification: SpecificationType;
}

const Specification: React.FC<SpecificationProps> = ({ specification }) => {
  return (
    <div className="w-full bg-slate-50 mt-6 p-4 rounded-md space-y-3 md:px-8 lg:pr-28">
      <h2 className="text-xl font-semibold mb-4 text-[#37a9fd]">
        Specification
      </h2>

      <p className="text-sm">
        <span className="font-bold">Brand:</span> {specification.brand}
      </p>
      <p className="text-sm">
        <span className="font-bold">Charging Interface:</span>{" "}
        {specification.chargingInterface}
      </p>
      <p className="text-sm">
        <span className="font-bold">Model:</span> {specification.model}
      </p>
      <p className="text-sm">
        <span className="font-bold">Calling Features:</span>{" "}
        {specification.callingFeatures}
      </p>
      <p className="text-sm">
        <span className="font-bold">Battery Capacity:</span>{" "}
        {specification.batteryCapacity}
      </p>
      <p className="text-sm">
        <span className="font-bold">Material:</span> {specification.material}
      </p>
      <p className="text-sm">
        <span className="font-bold">Charging Time:</span>{" "}
        {specification.chargingTime}
      </p>
      <p className="text-sm">
        <span className="font-bold">Chipset:</span> {specification.chipset}
      </p>
      <p className="text-sm">
        <span className="font-bold">Memory:</span> {specification.memory}
      </p>
      <p className="text-sm">
        <span className="font-bold">OS:</span> {specification.os}
      </p>
      <p className="text-sm">
        <span className="font-bold">Display:</span> {specification.display}
      </p>
      <p className="text-sm">
        <span className="font-bold">Sweat & Water Resistance:</span>{" "}
        {specification.sweatAndWaterResistance}
      </p>
      <p className="text-sm">
        <span className="font-bold">Battery Life:</span>{" "}
        {specification.batteryLife}
      </p>
      <p className="text-sm">
        <span className="font-bold">Other Features / Info:</span>{" "}
        {specification.otherFeatures.join(", ")}
      </p>
    </div>
  );
};

export default Specification;
