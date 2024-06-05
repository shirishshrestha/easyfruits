import { PersonSvg } from "./Svg";

const FeaturedCard = ({ imgUrl, desc, title }) => {
  return (
    <div className="rounded-[30px] shadow-3xl h-[38rem]  bg-[#fff]">
      <figure className="h-[200px]  w-full">
        <img
          src={imgUrl}
          alt=""
          className="rounded-t-[30px] w-full h-full object-cover object-center"
        />
      </figure>
      <div className="py-[40px] px-[30px] rounded-b-[30px]">
        <h3 className="text-[#252525] text-[28px] font-[700] mb-[0.5rem]">
          {title}
        </h3>
        <div className="flex items-center justify-start gap-[.25rem] py-[0.5rem]">
          <PersonSvg />
          <span>Easy Fruits</span>
        </div>
        <p className="text-[#898989] text-[18px] font-[400] mb-[1rem]">
          {desc}
        </p>
      </div>
    </div>
  );
};

export { FeaturedCard };
