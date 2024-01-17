import { useLayoutEffect, useEffect, useRef, useState } from "react";

import GoodCarousel from "react-good-carousel";
import ServiceCard from "./ServiceCard";

const useWindowWidth = () => {
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWidth);
    updateWidth();
    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  return width;
};

const ServicesCarousel = ({ data }) => {
  const windowWidth = useWindowWidth();
  const carouselRef = useRef(null);
  const [currentPane, setCurrentPane] = useState(0);
  const [itemsPerPane, setItemsPerPane] = useState(3);
  const [paneCount, setPaneCount] = useState(0);
  const [gap, setGap] = useState(8);
  const [itemPeek, setItemPeek] = useState(40);
  const [touchstartX, setTouchstartX] = useState(0);

  const onRender = (carouselAttributes) => {
    // Callback from the carousel when it re-renders

    // If the number of panes changes, we need to know
    // so we can update the number of bubble nav items.
    setPaneCount(carouselAttributes.paneCount);

    // If we pass a currentPane value greater than paneCount - 1
    // then the carousel updates it to be 0.
    // If we pass a currentPane value less than 0
    // then the carousel updates it to be paneCount - 1.
    // This allows the next/prev buttons to never cause overflow.
    setCurrentPane(carouselAttributes.currentPane);
  };

  useEffect(() => {
    if (windowWidth < 700) {
      // Adjusts props for mobile
      setItemsPerPane(1);
      setGap(4);
      setItemPeek(0);
    } else if (windowWidth < 1200) {
      // Adjusts props for tablet
      setItemsPerPane(2);
      setGap(8);
      setItemPeek(0);
    } else {
      // Adjusts props for desktop
      setItemsPerPane(4);
      setGap(0);
      setItemPeek(0);
    }
  }, [windowWidth]);

  useEffect(() => {
    // Implements swiping for mobile/tablet devices
    if (!carouselRef.current) {
      return;
    }
    const carouselRefLocal = carouselRef;
    const onTouchStart = (e) => {
      setTouchstartX(e.changedTouches[0].screenX);
    };
    const onTouchEnd = (e) => {
      const touchendX = e.changedTouches[0].screenX;
      if (touchendX < touchstartX) {
        setCurrentPane(currentPane + 1);
      } else if (touchendX > touchstartX) {
        setCurrentPane(currentPane - 1);
      }
    };
    carouselRefLocal.current.addEventListener("touchstart", onTouchStart);
    carouselRefLocal.current.addEventListener("touchend", onTouchEnd);
    return () => {
      carouselRefLocal.current.removeEventListener("touchstart", onTouchStart);
      carouselRefLocal.current.removeEventListener("touchend", onTouchEnd);
    };
  }, [carouselRef, currentPane, touchstartX]);

  return (
    <>
      <div ref={carouselRef}>
        <GoodCarousel
          currentPane={currentPane}
          itemsPerPane={itemsPerPane}
          gap={gap}
          itemPeek={itemPeek}
          animationDuration={0.5}
          onRender={onRender}
        >
          {data.resources.map((resource, index) => {
            return (
              <ServiceCard
                key={index}
                resource={resource}
              />
            );
          })}
        </GoodCarousel>
      </div>
      <div className="nav">
        <button
          type="button"
          className="arrow arrow--left"
          onClick={() => setCurrentPane(currentPane - 1)}
        >
          &#10140;
        </button>
        {Array.apply(null, { length: paneCount }).map((e, i) => (
          <button
            type="button"
            className={`bubble${currentPane === i ? " bubble--selected" : ""}`}
            key={i}
            onClick={() => setCurrentPane(i)}
          ></button>
        ))}
        <button
          type="button"
          className="arrow"
          onClick={() => setCurrentPane(currentPane + 1)}
        >
          &#10140;
        </button>
      </div>
    </>
  );
};

export default ServicesCarousel;
