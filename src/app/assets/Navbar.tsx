"use client";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" h-24 w-full bg-[#0C0C0C] text-white px-5">
      <div className=" flex h-24 py-4 w-full justify-between bg-[#0c0c0c]">
        <Image src="/images/logo.png" alt="Laptop" height={100} width={200} />
        <ul className="hidden sm:flex">
          <li className="p-4 cursor-pointer">
            <a className="text-lg" href="/">Home</a>
          </li>
          <li className="p-4 cursor-pointer">
            <a className="text-lg" href="#">Features</a>
          </li>

          <li className="p-4 cursor-pointer">
            <a className="text-lg" href="#">About Us</a>
          </li>
          <li className="p-4 cursor-pointer">
            <a className="text-lg" href="#">Legal Resources</a>
          </li>
        </ul>

        <div className="border-white border-2 m-4 h-fit px-5 rounded-xl">
          Get Trail !
        </div>
      </div>

      <div onClick={handleNav} className="block sm:hidden">
        {nav ? (
          <AiOutlineClose size={20} className="text-black" />
        ) : (
          <AiOutlineMenu size={20} />
        )}
      </div>

      <div
        className={
          nav
            ? "fixed top-0 right-0 pt-4 w-[30%] h-full ease-in-out duration-500 bg-black"
            : "pt-24 ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <div onClick={handleNav} className="block sm:hidden">
          <AiOutlineClose size={20} />
        </div>

        <ul className="text-center text-white">
          <li className="p-4 cursor-pointer">
            <a className="text-lg" href="/">Home</a>
          </li>
          <li className="p-4 cursor-pointer">
            <a className="text-lg" href="#">Features</a>
          </li>
          <li className="p-4 cursor-pointer">
            <a className="text-lg" href="#">About Us</a>
          </li>
          <li className="p-4 cursor-pointer">
            <a className="text-lg" href="#">Legal Resources</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
