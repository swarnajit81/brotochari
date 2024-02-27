import CloudinaryBtn from "@/components/common/CloudinaryBtn";
import cloudinary from "cloudinary";
import CloudinaryImage from "@/components/common/CloudinaryImage";
import { Suspense } from "react";
import GridLoader from "@/components/loaders/GridLoader";

const GridContainer = async () => {
  const results = await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("public_id", "asc")
    .max_results(30)
    .execute();

  return (
    <div className="columns columns-1 md:columns-2  lg:columns-3 xl:columns-4 w-full">
      {results?.resources?.map((el, i) => (
        <CloudinaryImage {...{ el }} key={i} />
      ))}
    </div>
  );
};

const page = () => {
  return (
    <div className=" pt-[15rem] w-[90%] xl:w-[85%]  mx-auto pb-[10rem] ">
      <div className="w-full justify-between  flex items-center uppercase ">
        <h1
          style={{
            fontSize: "clamp(4rem , 10vw + 1rem , 6rem)",
          }}
        >
          Gallery
        </h1>
        <CloudinaryBtn />
      </div>
      <Suspense fallback={<GridLoader length={7} />}>
        <GridContainer length />
      </Suspense>
    </div>
  );
};

export default page;
