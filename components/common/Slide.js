import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import LoadedImage from "./LoadedImage";

const Slide = ({ slide, i , handleImageClick }) => {
  return (
    <div
      key={i}
      onClick={handleImageClick}
      className="h-[400px] snap-start grayscale group hover:grayscale-0 transition-all duration-500 cursor-pointer lg:h-[400px] flex-shrink-0 rounded-[25px] overflow-hidden aspect-[3/4] relative"
    >
      <div className=" bg-gradient-to-t bottom-0 from-accent_blue to-transparent h-[200px] w-full absolute pointer-events-none z-10"></div>
      <LoadedImage
        loading="lazy"
        alt="img"
        fill
        placeholder="blur"
        className="w-full object-cover  group-hover:scale-110 h-full"
        src={slide.url}
      />
      <div className="py-[.5rem] border-t-[1px] w-[90%] mx-auto border-t-secondary absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-between items-center text-[16px] z-[11] text-secondary">
        <p>View</p>
        <span className="text-[35px]">
          <IoIosArrowRoundForward />
        </span>
      </div>
    </div>
  );
};

export default Slide;
