import * as React from "react";

const NavArrow = React.forwardRef(({ direction, onClick }, ref) => {
  const path =
    direction === "prev"
      ? "M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z"
      : "M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z";

  return (
    <div
      direction={direction}
      onClick={onClick}
      ref={ref}
      className={`absolute cursor-pointer transition-all ease-in-out bg-white p-2 rounded-full z-10 active:scale-90 ${
        direction === "next" && "right-3 xl:right-5"
      } ${direction === "prev" && "left-3 xl:left-5"}`}
    >
      <svg
        viewBox="0 0 8 8"
        className="w-6 h-6 fill-boni-blue-100"
      >
        <path d={path} />
      </svg>
    </div>
  );
});
NavArrow.displayName = "NavArrow";

export default NavArrow;
