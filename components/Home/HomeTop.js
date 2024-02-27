"use client";
import { motion } from "framer-motion";
import LoadedImage from "../common/LoadedImage";

const HomeTop = () => {
  return (
    <div id="home" className="w-full font-light relative mb-[3rem] min-h-screen">
      <div className="w-[80%] uppercase mx-auto flex text-[18px] tracking-wider pt-[10px] justify-between items-center">
        <p>ESTD 2006</p>
        <p className="text-secondary">Standing, Always</p>
        <p>Contact us</p>
      </div>
      <div className="relative overflow-hidden rounded-[25px] mt-[1rem] w-[95%] mx-auto h-[calc(100vh-7rem)]  font-bold uppercase">
        <h1
          style={{
            fontSize: "clamp(4rem , 10vw + 1rem , 9rem)",
            lineHeight: "clamp(4rem , 10vw + 1rem , 9rem)",
          }}
          className="absolute text-center  z-[2] text-white  bottom-[10%] left-1/2 -translate-x-1/2"
        >
          <p className="w-max h-auto overflow-hidden">
            <motion.span
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="inline-block"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
            >
              <span className="italic pr-[1rem]">W</span>
              <span>elcome</span>&nbsp;<span>at</span>
            </motion.span>
          </p>
          <p className="text-secondary w-max h-auto overflow-hidden">
            <motion.span
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
              className="inline-block"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
            >
              Brotochari
            </motion.span>
          </p>
        </h1>
        <div className="absolute h-[200px] bottom-0 w-full bg-gradient-to-t from-[#03335a] to-transparent z-[1]"></div>
        <div className="h-full w-full relative">
          <LoadedImage
            priority={true}
            src={"/images/broto.jpg"}
            className="w-full brightness-75 h-full object-cover"
            fill={true}
            
            alt="bg"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeTop;
