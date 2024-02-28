import Fixtures from "@/components/Home/Fixtures";
import GallerySection from "@/components/Home/GallerySection";
import HomeTop from "@/components/Home/HomeTop";
import LeaderBoard from "@/components/Home/LeaderBoard";
import { getImages } from "@/lib/actions";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Suspense } from "react";
import cloudinary from "cloudinary";

const ImageSlider = async () => {
  const results = await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("public_id", "asc")
    .max_results(30)
    .execute();
  return <GallerySection images={results.resources} />;
};

export default function Home() {
  return (
    <>
      <HomeTop />
      <Suspense fallback={<SliderSkeletonLoader />}>
        <ImageSlider />
      </Suspense>
      <Fixtures />
      <LeaderBoard />
    </>
  );
}

const SliderSkeletonLoader = () => {
  return (
    <div className="w-full h-full flex flex-nowrap justify-start items-center gap-[2rem] !scroll-smooth  overflow-auto no-scrollbar snap-x">
      {Array(10)
        ?.fill("")
        ?.map((el, i) => (
          <div
            key={i}
            className="h-[400px] snap-start bg-primary transition-all duration-500 cursor-pointer lg:h-[400px] flex-shrink-0 rounded-[25px] overflow-hidden aspect-[3/4] relative"
          >
            <div className=" bg-gradient-to-t bottom-0 from-accent_blue to-transparent h-[200px] w-full absolute pointer-events-none z-10"></div>

            <div className="py-[.5rem] border-t-[1px] w-[90%] mx-auto border-t-secondary absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-between items-center text-[16px] z-[11] text-secondary">
              <p>View</p>
              <span className="text-[35px]">
                <IoIosArrowRoundForward />
              </span>
            </div>
          </div>
        ))}
    </div>
  );
};
