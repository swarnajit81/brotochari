"use client";

import { handleRedirect } from "@/lib/actions";
import { RiAdminFill } from "react-icons/ri";
// import { useState } from "react/cjs/react.production.min";

const LoginBtn = () => {
  return (
    <div
      onClick={async () => await handleRedirect()}
      className="w-[55px] cursor-pointer bg-white grid place-content-center h-[35px] rounded-[10px]"
    >
      <span className="text-accent_blue text-[25px]">
        <RiAdminFill />
      </span>
    </div>
  );
};

export default LoginBtn;
