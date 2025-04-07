"use client";

import React from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { ReactNode, useEffect } from "react";
import useMeasure from "react-use-measure";

interface InfinitiveScrollerProps {
  duration: number;
  length: number;
  title: string;
  position: "top" | "bottom" | "left" | "right";
}

const InfinitiveScroller: React.FC<InfinitiveScrollerProps> = ({
  duration,
  length,
  title,
  position,
}) => {
  const isVertical = position === "left" || position === "right";

  return (
    <div
      className={`absolute 
        ${position}-0 ${
        isVertical ? "top-0 h-full flex items-center justify-center" : ""
      }`}
    >
      <InfinitiveScrollerItem
        duration={duration}
        direction={isVertical ? "vertical" : "horizontal"}
      >
        {Array.from({ length }, (_, i) => (
          <div
            className={`text-[18px] font-medium text-[#8b8585] px-4 py-2 select-none ${
              isVertical
                ? "[writing-mode:vertical-rl] rotate-180 leading-[1.2]"
                : ""
            }`}
            key={i}
          >
            {title}
          </div>
        ))}
      </InfinitiveScrollerItem>
    </div>
  );
};

const InfinitiveScrollerItem = ({
  children,
  duration,
  direction = "horizontal",
}: {
  children: ReactNode;
  duration: number;
  direction?: "horizontal" | "vertical";
}) => {
  const [ref, { width, height }] = useMeasure();
  const translation = useMotionValue(0);

  useEffect(() => {
    const finalPosition = direction === "horizontal" ? -width / 5 : -height / 5;

    animate(translation, [0, finalPosition], {
      ease: "linear",
      duration,
      repeat: Infinity,
      repeatType: "loop",
    });
  }, [translation, width, height, duration, direction]);

  return (
    <motion.div
      className={`flex ${
        direction === "horizontal" ? "w-max" : "h-max flex-col"
      }`}
      style={
        direction === "horizontal" ? { x: translation } : { y: translation }
      }
      ref={ref}
    >
      {children}
    </motion.div>
  );
};

const InfinitiveScrollerGroup = ({
  title,
  length,
  duration,
}: {
  title: string;
  length: number;
  duration: number;
}) => {
  return (
    <>
    <div className="md:block hidden">
      <InfinitiveScroller position="top" title={title} length={length} duration={duration} />
      <InfinitiveScroller position="bottom" title={title} length={length} duration={duration} />
      <InfinitiveScroller position="left" title={title} length={length} duration={duration} />
      <InfinitiveScroller position="right" title={title} length={length} duration={duration} />
    </div>
     
    </>
  );
};

export { InfinitiveScroller, InfinitiveScrollerItem, InfinitiveScrollerGroup };
