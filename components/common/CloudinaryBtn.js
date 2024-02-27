"use client";
import { CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { BiUpload } from "react-icons/bi";

const CloudinaryBtn = () => {
  const router = useRouter()
  return (
    <div className="flex  gap-[0.3rem] items-center px-[1rem]  bg-secondary  text-primary rounded-[10px] active:scale-110  ">
      <BiUpload size={25} />
      <CldUploadButton
        className="p-[0.5rem] lg:p-[1rem]"
        onUpload={(result) => setTimeout(() => {
          router.refresh()
        } , 1000)}
        uploadPreset="ydndbkd3"
      />
    </div>
  );
};

export default CloudinaryBtn;
