import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";
import FunFact from "./mindsets/FunFact";
import Partners from "./mindsets/Partners";
import Pricing from "./mindsets/Pricing";
import ServiceItems from "./mindsets/ServiceItems";

const Service = () => {
  return (
    <SectionContainer name={"mindsets"}>
      <div className="container">
        <div className="tokyo_tm_services w-full h-auto clear-both float-left py-[100px] px-0">
          <div className="tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]">
            <div className="title_flex w-full h-auto clear-both flex justify-between items-end">
              {/* <SectionTitle pageName={"MINDSETS"} title={"What I Do"} /> */}
              <SectionTitle pageName={"MINDSETS"} />
            </div>
          </div>
          <ServiceItems />
        </div>
      </div>
      {/* <Partners />
      <FunFact />
      <Pricing /> */}
    </SectionContainer>
  );
};
export default Service;
