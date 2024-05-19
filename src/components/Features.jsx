import feature1 from "/motionarteffect-img9.png";
import feature2 from "/motionarteffect-img6.png";
import feature3 from "/motionarteffect-img7.png";

const Features = () => {
  return (
    <section className="mt-28 mb-28">
      <h3 className="text-center font-medium font-sora text-[25px] md:text-[30px] xl:text-[40px] leading-[55px] md:leading-[50px] xl:leading-[60px] text-[#EEE5FF] mb-5 w-3/5 mx-auto">
        An All-Round Plugin With Powerful Features
      </h3>
      <p className="text-[#EEE5FFBD] text-outfit text-center md:text-start mb-10 md:text-[18px] leading-[30px] font-light w-7/12 mx-auto">
        Whether you're a seasoned web designer or just starting out, Motion Art
        for Elementor seamlessly integrates with the Elementor platform,
        providing you with a seamless and intuitive experience.
      </p>

      {/* feature cards here  */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 flex-wrap ">
        {/* feature 1  */}
        <div className="card-background p-7 pr-10 mb-5 md:mb-0 w-11/12 mx-auto">
          <img className="w-[188px] mb-10" src={feature1} alt="" />
          <h4 className="font-medium font-sora text-[20px] md:text-[23px] xl:text-[25px] leading-[45px] text-[#EEE5FF] mb-5 w-3/5">
            Light Weight
          </h4>
          <p className="text-[#EEE5FFBD] text-outfit md:text-start mb-10 md:text-[18px] leading-[30px] font-light w-4/5 md:w-5/6">
            Motion Art for Elementor is designed to be lightweight.
          </p>
        </div>

        {/* feature 2  */}
        <div className="card-background p-7 pr-10 mb-5 md:mb-0 w-11/12 mx-auto">
          <img className="w-[188px] mb-10" src={feature2} alt="" />
          <h4 className="font-medium font-sora text-[20px] md:text-[23px] xl:text-[25px] leading-[45px] text-[#EEE5FF] mb-5 w-[350px]">
            Light Weight
          </h4>
          <p className="text-[#EEE5FFBD] text-outfit md:text-start mb-10 md:text-[18px] leading-[30px] font-light w-4/5 md:w-5/6">
            Motion Art for Elementor is designed to be lightweight.
          </p>
        </div>

        {/* feature 3  */}
        <div className="card-background p-7 pr-10 mb-5 md:mb-0 md:col-span-3 xl:col-auto w-11/12 mx-auto">
          <img className="w-[188px] mb-10" src={feature3} alt="" />
          <h4 className="font-medium font-sora text-[20px] md:text-[23px] xl:text-[25px] leading-[45px] text-[#EEE5FF] mb-5 w-3/5">
            Light Weight
          </h4>
          <p className="text-[#EEE5FFBD] text-outfit md:text-start mb-10 md:text-[18px] leading-[30px] font-light w-4/5 md:w-5/6">
            Motion Art for Elementor is designed to be lightweight.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
