const Banner = () => {
  return (
    <section className="mt-28">
      <div className="md:grid grid-cols-5 md:justify-between 2xl:justify-around gap-x-8 ">
        {/* left text */}
        <p className="text-[#EEE5FFBD] text-center font-medium md:text-start font-sora text-lg mb-5 md:mb-0">
          <span className="gradient-text">
            Transform <br /> Your Website{" "}
          </span>{" "}
          <br />
          With Motion Art Effect
        </p>
        <div className="mb-5 col-span-3">
          {/* middle text  */}
          <p className="text-[#EEE5FF] font-medium text-center md:text-start font-sora text-lg leading-[55px] md:leading-[65px] xl:leading-[85px]">
            <span className="text-[35px] md:text-[40px] xl:text-[65px]">
              Attract Your Visitors Attention With Colorful
            </span>
            <span className="text-[35px] md:text-[40px] xl:text-[65px] gradient-text">
              Motion Art Effect
            </span>
            <p className="text-lg font-medium text-[#EEE5FFBD] font-outfit">
              Unleash the power of creativity with Motion Art for Elementor -
              your ultimate solution for seamlessly integrating captivating
              animations into your website.
            </p>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
