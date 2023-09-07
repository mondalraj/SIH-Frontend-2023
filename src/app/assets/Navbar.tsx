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
    <div className=" h-24 w-full bg-black text-white">
      <div className=" flex h-24 py-4 w-full justify-between bg-black">
        <Image src="/images/logo.png" alt="Laptop" height={100} width={200} />
        <ul className="hidden sm:flex">
          <li className="p-4 cursor-pointer">
            <a href="/">Home</a>
          </li>
          <li className="p-4 cursor-pointer">
            <a href="#">Features</a>
          </li>

          <li className="p-4 cursor-pointer">
            <a href="#">About Us</a>
          </li>
          <li className="p-4 cursor-pointer">
            <a href="#">Legal Resources</a>
          </li>
        </ul>

        <p className=" p-2 m-2 text-white border-2 border-grey-600 rounded-full cursor-pointer hover:shadow-md hover:shadow-gray-700">
          <a href="#">Get Trial!</a>
        </p>
      </div>

      <div onClick={handleNav} className="block sm:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "fixed top-0 right-0 pt-4 w-[30%] h-full ease-in-out duration-500 bg-white"
            : "pt-24 ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <div onClick={handleNav} className="block sm:hidden">
          <AiOutlineClose size={20} />
        </div>

        <ul className="text-center">
          <li className="p-4 cursor-pointer">
            <a href="/">Home</a>
          </li>
          <li className="p-4 cursor-pointer">
            <a href="#">Features</a>
          </li>
          <li className="p-4 font-semibold cursor-pointer">
            <a href="#">About Us</a>
          </li>
          <li className="p-4 cursor-pointer">
            <a href="#">Legal Resources</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
