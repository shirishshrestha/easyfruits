import { useRef } from "react";
import { Cards, SectionTitle } from "../../components";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const productsRef = useRef();
  useGSAP(() => {
    gsap.from(productsRef.current, {
      y: 100,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: productsRef.current,
        start: "top center",
        end: "bottom bottom",
        markers: true,
        toggleActions: "play none none reverse",
      },
    });
  }, [{ scope: productsRef }]);
  return (
    <div ref={productsRef} className="py-[50px]">
      <div className="flex flex-col items-center justify-center">
        <SectionTitle title="FRUITS GO EASY" />
        <h2 className="heading">Our Products</h2>
      </div>
      <div className="grid grid-cols-3 gap-6 ">
        <Cards
          imageTitle="Daily Essential Bowl (Basic)"
          imageUrl="/bowl_basic.png"
        />
        <Cards imageTitle="Daily Essential Bowl" imageUrl="/bowl.png" />
        <Cards
          imageTitle="Premium Delight Bowl"
          imageUrl="/premium_delight_bowl.png"
        />
        <Cards imageTitle="Fasting (ब्रत ) Platter" imageUrl="/barta.png" />
        <Cards imageTitle="Healthy Heart" imageUrl="/helthy_heart.png" />
        <Cards imageTitle="Diabetic Friendly Bowl" imageUrl="/diabetic.png" />
        <Cards imageTitle="Skin Care Bowl" imageUrl="/skin.png" />
        <Cards imageTitle="Hair Care Bowl" imageUrl="/hair.png" />
        <Cards imageTitle="Fitness Bowl" imageUrl="/fitness.png" />
      </div>
    </div>
  );
};

export { Products };
