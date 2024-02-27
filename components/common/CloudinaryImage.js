"use client";
import React from "react";
import Image from "next/image";
import { deleteImage } from "@/lib/actions";

const CloudinaryImage = ({ el }) => {
  return (
    <div
      onClick={() => deleteImage(el.public_id)}
      key={el.public_id}
      className="relative w-full cursor-pointer h-auto"
    >
      <Image
        key={el.public_id}
        src={el.url}
        alt={el.etag}
        width={el.width}
        height={el.height}
        // fill={true}
        className="w-full h-auto py-[0.5rem] object-cover"
      />
    </div>
  );
};

export default CloudinaryImage;
