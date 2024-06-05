import { RightArrowSvg } from "./Svg";

const Button = ({ text }) => {
  return (
    <button className="flex gap-[0.5rem] justify-center items-center bg-orange text-[#fff] py-[1rem] px-[3rem] rounded-full text-[1rem] tracking-widest">
      {text}
      <RightArrowSvg />
    </button>
  );
};

export { Button };
