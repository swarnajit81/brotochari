import Fixtures from "@/components/Home/Fixtures";
import GallerySection from "@/components/Home/GallerySection";
import HomeTop from "@/components/Home/HomeTop";
import LeaderBoard from "@/components/Home/LeaderBoard";
import { getImages } from "@/lib/actions";

const ImageSlider = async () => {
  const results = await getImages();
  return <GallerySection images={results} />;
};

export default function Home() {
  return (
    <>
      <HomeTop />
      <ImageSlider />
      <Fixtures />
      <LeaderBoard />
    </>
  );
}
