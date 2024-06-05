import { Button } from "../../components";

const HeroSection = ({ heroRef }) => {
  return (
    <div
      ref={heroRef}
      className="bg-[url(/hero_bg.png)] h-full bg-no-repeat bg-cover py-[100px]"
    >
      <h1 className="text-[4.0625rem] font-[700] leading-[5rem] text-[#333333]">
        Your healthy eating partner <p className="text-orange">Easy Fruits</p>
      </h1>
      <div className="py-[1rem] max-w-[675px] text-[#7c7e7e] text-[1.125rem] leading-[30px] mb-[1rem]">
        <p>
          The hassle free way to enjoy fresh, cut fruits delivered straight to
          your doorstep. With our convenient subscription service, you will
          never have to worry about running out of your favorite fruits again.
          Simply choose the subscription plan that works for you
        </p>
      </div>
      <Button text="Learn More" />
    </div>
  );
};

export { HeroSection };
