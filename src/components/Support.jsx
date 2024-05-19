import browser from "/motionarteffect-img8.png";

const Support = () => {
  return (
    <section className="mt-28 mb-20 card-background px-[35px] py-[50px]">
      <div className=" w-3/5 md:w-[440px] mx-auto">
        <h3 className="text-center text-sora text-[#EEE5FF] text-[20px] md:text-[25px] leading-10 font-medium mb-5">
          Supported By All Popular Browsers
        </h3>
        <p className="text-[#EEE5FFBD] text-outfit text-center mb-5 text-[18px] leading-[30px] font-light">
          Rest assured, Motion Art is designed to be compatible with all major
          web browsers.
        </p>
        <img className="mx-4" src={browser} alt="" />
      </div>
    </section>
  );
};

export default Support;
