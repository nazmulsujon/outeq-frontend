import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center bg-[#f3f3f3]">
      <h1 className="text-9xl font-extrabold text-gray-800 tracking-widest">
        404
      </h1>
      <div className="bg-[#37a9fd] px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button className="mt-5">
        <Link
          to="/"
          className="relative inline-block text-sm font-medium text-[#37a9fd] group active:text-blue-400 focus:outline-none"
        >
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#37a9fd] group-hover:translate-y-0 group-hover:translate-x-0" />
          <span className="relative block px-8 py-3 bg-[#f3f3f3] border border-current">
            <span>Go Home</span>
          </span>
        </Link>
      </button>
    </section>
  );
};

export default Missing;
