"use client";

import React, { useContext } from "react";
import Broto from "../../../public/images/broto.png";
import Image from "next/image";
import { login } from "@/lib/actions";
import { motion } from "framer-motion";
import { useFormState, useFormStatus } from "react-dom";
import { FaSpinner } from "react-icons/fa";

const initialState = {
  error: "",
};

const Login = () => {
  const [state, formAction] = useFormState(login, initialState);
  const { pending } = useFormStatus();

  const inputArr = [
    {
      label: "username",
      type: "text",
      name: "username",
      id: "username",
    },
    {
      label: "password",
      type: "password",
      name: "password",
      id: "password",
    },
  ];

  return (
    <motion.div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}

      className="w-screen h-screen fixed top-0 left-0 z-[100] bg-gradient-to-t  from-accent_blue to-primary flex"
    >
      <div className="w-1/2 h-full justify-center items-center">
        <div className="w-full max-w-[400px] h-full flex mx-auto flex-col justify-center gap-[1rem]">
          <span className="text-[3rem] w-max ">Login to Brotochari</span>
          <form action={formAction} className="flex flex-col gap-[1rem]">
            {inputArr?.map((input, i) => (
              <div key={i} className="flex flex-col">
                <label htmlFor={input.id} className="text-gray-300">
                  {input.label}
                </label>
                <input
                  type={input.type}
                  id={input.id}
                  name={input.name}
                  className="w-full text-white h-[40px] bg bg-transparent border-[1px] border-[rgba(255,255,255,0.3)] px-[0.5rem] outline-none rounded-[10px] mt-[0.5rem]"
                ></input>
              </div>
            ))}
            {state?.error && (
              <p className=" text-red-500 text-[12px]">{state.error}</p>
            )}
            <button
              // onClick={login}

              // onClick={getSession}
              type="submit"
              className="w-full outline-none text-accent_blue text-[1.5rem] bg-secondary h-[55px] rounded-[10px] uppercase font-bold"
            >
              {pending ? <FaSpinner /> : "Log in"}
            </button>
          </form>
        </div>
      </div>
      <div className="w-1/2 relative h-full">
        <div className="absolute bottom-0 bg-gradient-to-t from-accent_blue to-transparent h-[200px] w-full z-10 "></div>
        <div className="absolute top-0 bg-gradient-to-b from-primary to-transparent h-[200px] w-full z-10 "></div>
        <Image src={Broto} alt="broto" className="w-full h-full object-cover" />
      </div>
    </motion.div>
  );
};

export default Login;
