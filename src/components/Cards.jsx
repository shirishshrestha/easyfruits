const Cards = ({ imageUrl, imageTitle }) => {
  return (
    <div className="mt-[24px] overflow-hidden  shadow-3xl rounded-[30px]">
      <figure className="rounded-[30px]  overflow-hidden ">
        <img
          src={imageUrl}
          alt="products"
          className="h-[200px] w-full rounded-t-[30px] object-cover hover:scale-105 trasition-all duration-300 ease-in-out"
        />
        <figcaption className="text-[#252525] text-[28px] font-[700] py-[30px] px-[40px] relative z-10 bg-[#fff] ">
          <p className="cursor-pointer">{imageTitle}</p>
        </figcaption>
      </figure>
    </div>
  );
};

export { Cards };
