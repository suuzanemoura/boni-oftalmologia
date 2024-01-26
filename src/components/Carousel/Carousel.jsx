import { Slider } from "@lifarl/react-scroll-snap-slider";
import NavArrow from "./NavArrow/NavArrow";

export default function Carousel({ children, width }) {
  const renderCustomArrow = ({ direction, ref, onClick }) => (
    <NavArrow
      ref={ref}
      direction={direction}
      onClick={() => onClick(direction)}
    />
  );

  return (
    <Slider
      renderCustomArrow={renderCustomArrow}
      slideWidth={width}
    >
      {children}
    </Slider>
  );
}
