import card1 from "/motionarteffect-img11.png";
import card2 from "/motionarteffect-img10.png";

const Apply = () => {
  return (
    <section className="mt-28 mb-20">
      <h3 className="text-center font-medium font-sora text-[25px] md:text-[30px] xl:text-[40px] leading-[55px] md:leading-[50px] xl:leading-[60px] text-[#EEE5FF] mb-10 w-2/3 mx-auto">
        Apply On Any Section Or Enable For Whole Page
      </h3>

      {/* cards here  */}
      <div className="md:flex gap-5">
        {/* first card  */}
        <div className="card-background p-7 md:w-3/5 h-fit">
          <h4 className="text-[#EEE5FF] font-medium text-[25px] xl:text-[30px] text-center md:text-start mb-3 text-sora leading-[40px] md:leading-[45px]">
            Apply On Section
          </h4>
          <p className="text-[#EEE5FFBD] text-outfit text-center md:text-start mb-5 md:text-[18px] leading-[30px] font-light">
            Apply on section is a game-changer, offering an unparalleled way to
            manage applications directly from your website.
          </p>
          <img className="" src={card1}></img>
        </div>

        {/* second card  */}
        <div className="card-background p-7 md:w-3/5 mt-7 md:mt-28">
          <h4 className="text-[#EEE5FF] font-medium text-[25px] xl:text-[30px] text-center md:text-start mb-3 text-sora leading-[40px] md:leading-[45px]">
            Apply On Page
          </h4>
          <p className="text-[#EEE5FFBD] text-outfit text-center md:text-start mb-5 md:text-[18px] leading-[30px] font-light">
            Take your website to new heights with Motion Art for Elementor.
            Embrace the power of motion and animation.
          </p>
          <img className=" " src={card2}></img>
        </div>
      </div>
    </section>
  );
};

export default Apply;
