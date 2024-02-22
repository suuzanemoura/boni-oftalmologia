"use client";

import { ChevronDoubleUpIcon } from "@heroicons/react/20/solid";
import { motion, useAnimationControls, useScroll } from "framer-motion";
import { useEffect } from "react";

const isBrowser = () => typeof window !== "undefined";

function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function ScrollToTopButton() {
  const ScrollToTopContainerVariants = {
    hide: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
  };

  const { scrollYProgress } = useScroll();
  const controls = useAnimationControls();

  useEffect(() => {
    return scrollYProgress.on("change", (latestValue) => {
      if (latestValue > 0.1) {
        controls.start("show");
      } else {
        controls.start("hide");
      }
    });
  });

  return (
    <motion.button
      className="fixed bottom-5 right-5 p-1 w-10 h-10 bg-boni-blue-300 rounded-full"
      variants={ScrollToTopContainerVariants}
      initial="hide"
      animate={controls}
      onClick={scrollToTop}
    >
      <ChevronDoubleUpIcon />
    </motion.button>
  );
}
