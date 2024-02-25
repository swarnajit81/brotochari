"use client";

import React from "react";
import { FaHome } from "react-icons/fa";
import { BiSolidPhotoAlbum } from "react-icons/bi";
import { IoIosFootball } from "react-icons/io";
import { MdLeaderboard } from "react-icons/md";
import { useState } from "react";
import { motion } from "framer-motion";

const BottomNav = () => {
  const [activeSection, setActiveSection] = useState(0);
  return (
    <div className="w-max flex gap-[2rem] fixed z-10 bottom-[20px] -translate-x-1/2 left-1/2 bg-secondary rounded-[10px] py-[0.7rem] px-[2.5rem]">
      {links?.map((el, i) => (
        <div
          onClick={() => setActiveSection(i)}
          key={i}
          className="flex cursor-pointer flex-col relative items-center "
        >
          <span className="text-[28px] text-accent_blue">{el.icon}</span>
          <p className=" text-accent_blue text-[14px] uppercase font-[200]">
            {el.text}
          </p>
          {activeSection === i && (
            <motion.div
              layoutId="line"
              className="w-full h-[2px] rounded-full bg-accent_blue absolute bottom-[-3px]"
            ></motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BottomNav;

const links = [
  { text: "home", icon: <FaHome /> },
  { text: "gallery", icon: <BiSolidPhotoAlbum /> },
  { text: "matches", icon: <IoIosFootball /> },
  { text: "leaderboard", icon: <MdLeaderboard /> },
];
