import review1 from "/motionarteffect-img1.png";
import review2 from "/motionarteffect-img2.png";
import review3 from "/motionarteffect-img3.png";
import pen from "/motionarteffect-img5.png";
import stars from "/motionarteffect-img4.png";
import { FaArrowRight } from "react-icons/fa";

const Review = () => {
  return (
    <section className="mt-20 mb-20">
      <h3 className="text-center text-2xl text-white mb-10">
        Trusted by thousands of users around the world
      </h3>

      {/* reviews  */}
      <div className="md:flex flex-wrap md:justify-around items-center mb-10 gap-x-20">
        {/* first review  */}
        <div className="flex items-center justify-start gap-3 mb-4 md:mb-0">
          <img className="w-[88px]" src={review2}></img>
          <div>
            <img className="w-[155px] h-[22px] mb-2" src={stars} alt="" />
            <p className="text-[#EEE5FFBD]">4.5 Score, 9 Reviews</p>
          </div>
        </div>

        {/* second review  */}
        <div className="flex items-center justify-start gap-3 mb-4 md:mb-0">
          <img className="w-[88px]" src={review1}></img>
          <div>
            <img className="w-[155px] h-[22px] mb-2" src={stars} alt="" />
            <p className="text-[#EEE5FFBD]">4.5 Score, 9 Reviews</p>
          </div>
        </div>

        {/* third review  */}
        <div className="flex items-center justify-start gap-3 mb-4 md:mb-0">
          <img className="w-[88px]" src={review3}></img>
          <div>
            <img className="w-[155px] h-[22px] mb-2" src={stars} alt="" />
            <p className="text-[#EEE5FFBD]">4.5 Score, 9 Reviews</p>
          </div>
        </div>
      </div>

      {/* purchase  */}
      <div className="md:flex items-center justify-between mb-10 gap-5">
        <div className="md:w-[430px] lg:w-[560px] xl:w-[780px] text-center md:text-left">
          <p className="text-[#EEE5FF] text-[25px] md:text-[30px] xl:text-[40px] font-medium leading-[45px] md:leading-[50px] xl:leading-[60px] font-sora">
            Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
          </p>
          <p className="font-outfit text-[#EEE5FFBD] md:text-lg mt-2 mb-7">
            Motion Art for Elementor is a groundbreaking plugin that empowers
            you to effortlessly infuse your website with visually stunning
            motion art elements.
          </p>
          <button className="text-sora text-xl text-white px-9 py-5 rounded-[20px] button-gradient flex items-center gap-3">
            Purchase From Evanto <FaArrowRight></FaArrowRight>
          </button>
        </div>
        <div className="w-[300px] mt-7 md:mt-0">
          <img className="w-[248px] mx-4" src={pen} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Review;
