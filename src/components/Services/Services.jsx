import ServiceCard from "./ServiceCard";
import { Slider } from "@lifarl/react-scroll-snap-slider";
import NavArrow from "./NavArrow";

export default function Services({ data }) {
  const renderCustomArrow = ({ direction, ref, onClick }) => (
    <NavArrow
      ref={ref}
      direction={direction}
      onClick={() => onClick(direction)}
    />
  );

  return (
    <div className="lg:mt-12 mb-12 lg:mb-6 mx-auto">
      <h2 className="text-3xl 2xs:text-4xl leading-8 font-semibold mb-12 text-slate-700">
        Experiência em:
      </h2>
      <div className="relative overflow-hidden max-w-[224px] 3xs:max-w-[256px] xs:max-w-[400px] md:max-w-[655px] lg:max-w-[790px] xl:max-w-[1055px]">
        <Slider
          renderCustomArrow={renderCustomArrow}
          slideWidth={256}
        >
          {data.map((service, index) => {
            return (
              <ServiceCard
                key={index}
                resource={service}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
