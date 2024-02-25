"use client";
import { dummyImages } from "@/lib";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

const GallerySection = () => {
  const container = useRef(null);

  const { scrollXProgress } = useScroll({
    container,
  });

  const scaleX = useTransform(scrollXProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className=" relative   my-[3rem] w-full   h-[800px]">
      <div className="absolute left-1/2 -translate-x-1/2  bg-accent_blue  max-w-[1200px] rounded-[25px] w-[90%] h-full">
        <h2 className="uppercase text-[9rem] text-center font-bold pt-[1rem] text-primary">
          Gallery
        </h2>
      </div>
      <motion.div
        ref={container}
        className="w-full h-full flex flex-nowrap justify-start items-center gap-[2rem]  overflow-auto no-scrollbar"
      >
        {dummyImages?.map((el, i) => (
          <div
            key={i}
            className="h-[400px] flex-shrink-0 rounded-[25px] overflow-hidden no-scro aspect-[3/4] relative"
          >
            <div className=" bg-gradient-to-t bottom-0 from-accent_blue to-transparent h-[200px] w-full absolute pointer-events-none z-10"></div>
            <Image
              loading="lazy"
              alt="yo"
              fill
              className="w-full object-cover h-full"
              src={el.img}
            />
            <div className="py-[.5rem] border-t-[1px] w-[90%] mx-auto border-t-secondary absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-between items-center text-[16px] z-[11] text-secondary">
              <p>Go</p>
              <span className="text-[35px]">
                <IoIosArrowRoundForward />
              </span>
            </div>
          </div>
        ))}
      </motion.div>
      <div className="w-[400px] h-[6px] bg-primary absolute bottom-[6rem] left-1/2 -translate-x-1/2">
        <motion.div
          style={{ width: scaleX }}
          className="absolute top-0 left-0 h-full rounded-full bg-secondary"
        ></motion.div>
      </div>
    </div>
  );
};

export default GallerySection;
