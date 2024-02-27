"use client";
import { dummyImages } from "@/lib";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionLayout from "../SectionLayout";
import Slide from "../common/Slide";
import Gallery from "../common/Gallery";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const GallerySection = ({images}) => {
  const [activeImage, setActiveImage] = useState("");
  const container = useRef(null);
  const handleImageClick = (el) => {
    setActiveImage(el.url);
  };

  const { scrollXProgress } = useScroll({
    container,
  });

  const scaleX = useTransform(scrollXProgress, [0, 1], ["0%", "100%"]);

  const handleScrollLeft = () => {
    if (container.current.scrollLeft === 0) {
      container.current.scroll({
        left: container.current.scrollWidth,
        behaviour: "smooth",
      });
    } else {
      const newScrollPos = container.current.scrollLeft - 200;
      container.current.scroll({
        left: newScrollPos,
        behaviour: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    const width = container.current.scrollWidth - container.current.offsetWidth;

    if (container.current.scrollLeft === width) {
      container.current.scroll({
        left: 0,
        behaviour: "smooth",
      });
    } else {
      const newScrollPos = container.current.scrollLeft + 200;
      container.current.scroll({
        left: newScrollPos,
        behaviour: "smooth",
      });
    }
  };

  return (
    <>
      <Gallery {...{ activeImage, setActiveImage }} />
      <SectionLayout title={"Gallery"} classNames={"h-[600px] lg:h-[800px]"}>
        <div
        id="gallery"
          ref={container}
          className="w-full h-full flex flex-nowrap justify-start items-center gap-[2rem] !scroll-smooth  overflow-auto no-scrollbar snap-x"
        >
          {images?.map((el, i) => (
            <Slide
              key={i}
              {...{
                i:el.public_id,
                slide: el,
                handleImageClick: () => handleImageClick(el),
              }}
            />
          ))}
        </div>
        <div className="w-[200px] md:w-[400px] h-[6px] bg-primary absolute bottom-[3rem] lg:bottom-[6rem] left-1/2 -translate-x-1/2">
          <motion.div
            style={{ width: scaleX }}
            className="absolute top-0 left-0 h-full rounded-full bg-secondary"
          ></motion.div>
        </div>
        <div className="max-w-[1200px] absolute flex justify-end items-end left-1/2 -translate-x-1/2 w-[90%] bottom-[2.5rem] lg:bottom-[5.5rem]">
          <div className="hidden md:flex w-max gap-[2rem] pr-[1rem] xl:pr-[4rem]">
            <span
              onClick={handleScrollLeft}
              className="text-[25px] text-secondary cursor-pointer"
            >
              <FaArrowLeft />
            </span>
            <span
              onClick={handleScrollRight}
              className="text-[25px] text-secondary cursor-pointer"
            >
              <FaArrowRight />
            </span>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default GallerySection;
