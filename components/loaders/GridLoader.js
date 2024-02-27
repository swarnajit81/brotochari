"use client";

import React from "react";

const GridLoader = ({ length }) => {
  return (
    <div className="grid gap-[0.5rem] grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 w-full">
      {Array(length)
        .fill("")
        .map((el) => (
          <div
            key={el}
            className="aspect-square w-full  bg-gray-300 animate-pulse"
          ></div>
        ))}
    </div>
  );
};

export default GridLoader;
