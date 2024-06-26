import { SectionTitle } from "../../components";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Dietician = () => {
  useGSAP(() => {
    const time = gsap.timeline({
      scrollTrigger: {
        trigger: ".diet",
        start: "top 40%",
        end: "center 80%",
        toggleActions: "play none none reverse",
      },
    });
    time
      .from(".dietTitle", {
        y: -100,
        duration: 0.7,
        opacity: 0,
        ease: "power2.out",
      })
      .from(".desc_section", {
        x: -100,
        duration: 0.7,
        opacity: 0,
        ease: "power2.out",
      })
      .from(".desc_quote", {
        x: 100,
        duration: 0.7,
        opacity: 0,
        ease: "power2.out",
      });
  }, [{ scope: ".diet" }]);
  return (
    <div className="pt-[50px] pb-[100px] diet overflow-hidden">
      <div className="flex flex-col items-center justify-center dietTitle">
        <SectionTitle title="DIETICIAN" />
        <h2 className="heading pb-[1.5rem]">Meet our Expert</h2>
      </div>
      <div className="flex justify-center items-center gap-[3rem] ">
        <figure className="desc_section">
          <img src="/dietician.png" alt="" className="w-[295px] rounded-full" />
        </figure>
        <div className="flex flex-col gap-[1rem] desc_quote ">
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
