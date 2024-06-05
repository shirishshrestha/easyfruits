import { Autoplay } from "swiper/modules";
import { Button, FeaturedCard, SectionTitle } from "../../components";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
const FeaturedBlogs = () => {
  return (
    <div id="main_container">
      <div className="py-[50px]">
        <div className="flex flex-col items-center justify-center">
          <SectionTitle title="FEATURED BLOGS" />
          <h2 className="heading pb-[1.5rem]">What We Aim to Provide</h2>
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper "
        >
          <SwiperSlide>
            <FeaturedCard
              imgUrl={"/blog1.png"}
              desc="Welcome to the world of convenience and taste, where Easy Fruits
          brings you a hassle-free way to enjoy the goodness of nature. Life can
          be busy, but that doesn't mean you have to compromise on nutrition and
          flavor."
              title="EasyFruits: Unlocking the Nutritional Power of Fruits in a Convenient
          Way"
            />
          </SwiperSlide>
          <SwiperSlide>
            <FeaturedCard
              imgUrl={"/blog2.jpg"}
              desc="Fruits are nature's gift to our well-being, packed with essential nutrients, antioxidants, and countless health benefits. At Easyfruits, we're passionate about promoting good health and making it effortless for you to enjoy these natural wonders."
              title="Power of Fruits to revitalize your health"
            />
          </SwiperSlide>
          <SwiperSlide>
            <FeaturedCard
              imgUrl={"/blog3.png"}
              desc="As the leaves change color and the air turns crisp, nature presents us with a bountiful harvest of delicious fruits that are not only a delight to the taste buds but also packed with seasonal goodness."
              title="5 Must Try Fruits for Autumn Season"
            />
          </SwiperSlide>
          <SwiperSlide>
            <FeaturedCard
              imgUrl={"/blog1.png"}
              desc="  Welcome to the world of convenience and taste, where Easy Fruits
          brings you a hassle-free way to enjoy the goodness of nature. Life can
          be busy, but that doesn't mean you have to compromise on nutrition and
          flavor."
              title="EasyFruits: Unlocking the Nutritional Power of Fruits in a Convenient
          Way"
            />
          </SwiperSlide>
          <SwiperSlide>
            <FeaturedCard
              imgUrl={"/blog2.jpg"}
              desc="Fruits are nature's gift to our well-being, packed with essential nutrients, antioxidants, and countless health benefits. At Easyfruits, we're passionate about promoting good health and making it effortless for you to enjoy these natural wonders."
              title="Power of Fruits to revitalize your health"
            />
          </SwiperSlide>
          <SwiperSlide>
            <FeaturedCard
              imgUrl={"/blog3.png"}
              desc="As the leaves change color and the air turns crisp, nature presents us with a bountiful harvest of delicious fruits that are not only a delight to the taste buds but also packed with seasonal goodness."
              title="5 Must Try Fruits for Autumn Season"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex items-center justify-center pb-10">
        <Button text="Read More" />
      </div>
    </div>
  );
};

export { FeaturedBlogs };
