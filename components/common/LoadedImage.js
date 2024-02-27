"use client";

import { cn } from "@/lib";
import Image from "next/image";
import { useState } from "react";
const LoadedImage = ({ priority, placeholder, alt, src, fill, className , width , height }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <Image
      priority={priority}
      alt={alt}
      // placeholder={placeholder}
      width={width}
      height={height}
      src={src}
      fill={fill}
      onLoad={() => {
        console.log("hi");
        setLoaded(true);
      }}
      className={cn(` opacity-0 transition-all ${className}`, {
        "opacity-100 duration-500": loaded,

      })}
    />
  );
};

export default LoadedImage;
