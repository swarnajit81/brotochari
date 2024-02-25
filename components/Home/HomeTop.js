import Image from "next/image";
const HomeTop = () => {
  return (
    <div className="w-full font-light relative h-screen">
      <div className="w-[80%] uppercase mx-auto flex text-[18px] tracking-wider pt-[10px] justify-between items-center">
        <p>ESTD 2006</p>
        <p className="text-secondary">Standing, Always</p>
        <p>Contact us</p>
      </div>
      <div className="relative min-h-[500px] overflow-hidden rounded-[25px] mt-[1rem] w-[95%] mx-auto h-[calc(100vh-7rem)] font-bold uppercase">
        <h1
          style={{
            fontSize: "clamp(4rem , 10vw + 1rem , 9rem)",
            lineHeight: "clamp(4rem , 10vw + 1rem , 9rem)",
          }}
          className="absolute text-center  z-[2] text-white  bottom-[10%] left-1/2 -translate-x-1/2"
        >
          <span className="italic pr-[1rem]">W</span>
          <span>elcome</span>&nbsp;<span>at</span>
          <p className="text-secondary">Brotochari</p>
        </h1>
        <div className="absolute h-[200px] bottom-0 w-full bg-gradient-to-t from-[#03335a] to-transparent z-[1]"></div>
        <Image
          src="/images/team.jpg"
          className="w-full brightness-75 h-full object-cover"
          fill
          alt="bg"
        />
      </div>
    </div>
  );
};

export default HomeTop;
