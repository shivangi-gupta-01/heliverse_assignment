import logo from "/MotionArtEffect-logo.png";

const Navbar = () => {
  return (
    <div className="mt-8 md:flex md:justify-between items-center mb-10">
      {/* logo here */}
      <img
        className="w-1/2 md:w-[220px] md:h-[52px] pointer-events-auto"
        onClick={() => window.location.reload()}
        src={logo}
      ></img>

      {/* button here  */}
      <div className="opacity-0 xl:opacity-100">
        <button className="text-lg text-black border border-white px-8 py-3 bg-white rounded-md hover:bg-transparent hover:text-white transition duration-300 ease-in font-outfit pointer-events-auto">
          Purchase Now
        </button>
      </div>
    </div>
  );
};

export default Navbar;
