import { IoMdClose } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const Gallery = ({ activeImage, setActiveImage }) => {
  return (
    <AnimatePresence>
      {activeImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key={activeImage}
          className="fixed inset-0 bg-accent_blue z-[50] flex justify-center items-center"
        >
          <span
            onClick={() => setActiveImage(false)}
            className="absolute top-[20px] right-[20px] text-[50px] cursor-pointer  text-secondary"
          >
            <IoMdClose />
          </span>
          <div className="w-full h-[calc(100vh-10rem)] relative">
            <Image
              src={activeImage}
              alt="alt tag"
              className="object-contain"
              fill={true}
              sizes="100vw"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Gallery;
