import { FaRegCircle } from "react-icons/fa6";

const Products = () => {
  return (
    <section className="py-[50px]">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center text-orange">
          <div className="flex gap-[2px] text-[9px] ">
            <FaRegCircle />
            <FaRegCircle />
            <FaRegCircle />
          </div>
          <span className="px-[1rem] text-[0.75rem] font-[500]">
            FRUITS GO EASY
          </span>
          <div className="flex gap-[2px] text-[9px] ">
            <FaRegCircle />
            <FaRegCircle />
            <FaRegCircle />
          </div>
        </div>
        <h2 className="heading">Our Products</h2>
      </div>
      <div></div>
    </section>
  );
};

export { Products };
