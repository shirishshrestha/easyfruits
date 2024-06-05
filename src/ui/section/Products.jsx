import { Cards, SectionTitle } from "../../components";

const Products = () => {
  return (
    <div className="py-[50px]">
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
