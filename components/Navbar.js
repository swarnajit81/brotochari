"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={cn(
        "fixed top-[10px] w-full  uppercase z-10 transition-all duration-500 left-0  h-[91px]",
        {
          "top-[60px]": !isScrolled,
        }
      )}
    >
      <div
        className={cn(
          "w-full transition-all delay-300 duration-500  opacity-0 fixed h-[80px] top-[-5px]  bg-gradient-to-b from-[#03335a] to-transparent",
          {
            "opacity-100": isScrolled,
          }
        )}
      ></div>

      <div className="relative justify-between  mx-auto items-center flex w-[80%]  h-full">
        <div className="flex gap-[0.5rem] items-start">
          {socials.map((el, i) => (
            <span
              key={i}
              className="text-[25px] w-[65px] bg-white  h-[35px] grid place-items-center rounded-[10px] text-accent_blue"
            >
              {el.icon}
            </span>
          ))}
        </div>
        <Image
          src={"/images/logo.png"}
          priority
          width={256}
          height={256}
          alt="logo"
          className={cn(
            "bg-white absolute transition-all duration-500 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[60px] mix-blend-screen scale-125 rounded-full border-[1px] border-[#fff]",
            {
              "scale-100": isScrolled,
            }
          )}
        />
        <div className="w-[55px] bg-white grid place-content-center h-[35px] rounded-[10px]">
          <span className="text-accent_blue text-[25px]">
            <RiAdminFill />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const socials = [
  {
    link: "/",
    icon: <FaInstagram />,
  },
  {
    link: "/",
    icon: <FaFacebook />,
  },
];
