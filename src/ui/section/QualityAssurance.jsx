import { QualityAssurancePoints, SectionTitle } from "../../components";

const QualityAssurance = () => {
  return (
    <div className="py-[50px]">
      <div className="py-[100px] bg-[url(/quality.png)] ">
        <div id="main_container ">
          <SectionTitle title={"QUALITY ASSURANCE"} />
          <h2 className="heading text-center pb-[1.5rem]">Quality Assurance</h2>
          <div className="flex justify-center items-start">
            <div className=" max-w-[25%] flex flex-col w-full">
              <div className=" flex ">
                <QualityAssurancePoints
                  className={"text-right mr-[1.5rem]"}
                  title="Assured Hygiene"
                  desc="Our top quality ozonisation machine, automatic peeling machines and top quality chilling and packaging facility assures top in class hygiene that you can be assured."
                />
                <figure className="quality_icons">
                  <img src="/accept.png" alt="" className="h-[33px] w-[33px]" />
                </figure>
              </div>

              <div className="flex">
                <QualityAssurancePoints
                  className={"text-right mr-[1.5rem]"}
                  title="Eco-friendly Commitment"
                  desc="We prioritize sustainability and environmental responsibility. Our packaging is eco-friendly, minimizing our ecological footprint as we deliver your fruits to you."
                />
                <figure className="quality_icons">
                  <img
                    src="/environmentalism.png"
                    alt=""
                    className="h-[33px] w-[33px]"
                  />
                </figure>
              </div>
              <div className="flex">
                <QualityAssurancePoints
                  className={"text-right mr-[1.5rem]"}
                  title="Nutrition and Wellness"
                  desc="Our team of nutrition experts provides valuable insights and tips on how to make the most of your fruit subscription, supporting your journey towards better health. You can choose your need wisely."
                />
                <figure className="quality_icons">
                  <img
                    src="/nutrient.png"
                    alt=""
                    className="h-[33px] w-[33px]"
                  />
                </figure>
              </div>
            </div>
            <figure className="max-w-[300px] mx-[58px]">
              <img src="/orange.png" alt="" className="" />
            </figure>

            <div className=" max-w-[25%]  flex flex-col w-ful ">
              <div className="flex">
                <figure className="quality_icons">
                  <img src="/annual.png" alt="" className="h-[33px] w-[33px]" />
                </figure>
                <QualityAssurancePoints
                  className={"text-left ml-[1.5rem]"}
                  title="Customizable Subscriptions"
                  desc="Tailor your subscription to match your unique preferences. Whether you're an avid fruit lover or a looking to snack healthier, we've got you covered."
                />
              </div>
              <div className="flex">
                <figure className="quality_icons">
                  <img
                    src="/delivery.png"
                    alt=""
                    className="h-[33px] w-[33px]"
                  />
                </figure>
                <QualityAssurancePoints
                  className={"text-left ml-[1.5rem]"}
                  title="Convenience at Your Doorstep"
                  desc="Say goodbye to hassles at fruit market! Our reliable delivery service ensures your favorite fruit bowl arrives at your work on your chosen schedule."
                />
              </div>
              <div className="flex">
                <figure className="quality_icons">
                  <img
                    src="/high-quality.png"
                    alt=""
                    className="h-[33px] w-[33px]"
                  />
                </figure>
                <QualityAssurancePoints
                  className={"text-left ml-[1.5rem]"}
                  title="Premium Selection"
                  desc="We source our fruits from trusted and reputable suppliers, handpicking each piece to guarantee the highest quality and freshness."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { QualityAssurance };
