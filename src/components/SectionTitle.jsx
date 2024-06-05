import { FaRegCircle } from "react-icons/fa";

const SectionTitle = ({ title }) => {
  return (
    <div className="flex items-center justify-center text-orange">
      <div className="flex gap-[2px] text-[9px] ">
        <FaRegCircle />
        <FaRegCircle />
        <FaRegCircle />
      </div>
      <span className="px-[1rem] text-[0.75rem] font-[500]">{title}</span>
      <div className="flex gap-[2px] text-[9px] ">
        <FaRegCircle />
        <FaRegCircle />
        <FaRegCircle />
      </div>
    </div>
  );
};

export { SectionTitle };
