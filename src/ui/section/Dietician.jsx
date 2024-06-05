import { SectionTitle } from "../../components";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const Dietician = () => {
  return (
    <div className="py-[50px]">
      <div className="flex flex-col items-center justify-center">
        <SectionTitle title="DIETICIAN" />
        <h2 className="heading pb-[1.5rem]">Meet our Expert</h2>
      </div>
      <div className="flex justify-center items-center gap-[3rem]">
        <figure>
          <img src="/dietician.png" alt="" className="w-[295px] rounded-full" />
        </figure>
        <div className="flex flex-col gap-[1rem]">
          <BiSolidQuoteAltLeft className="text-4xl" />
          <div className="text-[#6f6f6f] w-[38rem] h-[auto] text-[1.2rem] italic">
            <p>
              Incorporating fruits into your daily diet is a simple path toward
              a healthy lifestyle.
            </p>
          </div>
          <h6 className="text-orange text-[1.125rem] font-[700]">
            Rashmi Bajimaya Shrestha |{" "}
            <span className="text-[#8e8e9a]">Master in Food and Nutrition</span>
          </h6>
        </div>
      </div>
    </div>
  );
};

export { Dietician };
