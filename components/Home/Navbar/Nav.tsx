"use client"
import { NavLinks } from "@/constant/constant";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav:()=>void
}
const Nav = ({openNav}:Props) => {
  const [navBg,setNavBg] = useState(false)
  useEffect(()=>{
    const handler = ()=>{
      if(window.scrollY >=90){
        setNavBg(true)
      }else if(window.scrollY <90){
        setNavBg(false)
      }
    };
    window.addEventListener("scroll",handler);
    return ()=>{
      window.removeEventListener("scroll",handler)
    }
  },[])
  return (
    <div className={`fixed left-1/2 transform -translate-x-1/2 transition-all duration-700  ${
        navBg
          ? "top-12 w-[80%] h-16 bg-black opacity-60 rounded-full shadow-2xl z-20 "
          : "top-0 w-full h-[12vh] bg-blue-950 rounded-none z-10"
      }`}>
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={170}
          height={170}
          className="-ml-6 sm:ml-0"
        ></Image>

        {/* navLinks */}
        <div className="flex items-center space-x-10">
          <div className="hidden lg:flex items-center space-x-8">
            {NavLinks.map((navLink) => {
              return (
                <Link key={navLink.id} href={navLink.url}>
                  <p className="nav_link">{navLink.label}</p>
                </Link>
              );
            })}
          </div>

          <button
            className="
            px-6 py-2 
            bg-gray-300
            text-black font-semibold rounded-lg 
            shadow-lg hover:shadow-xl 
            transform hover:-translate-y-1 
            transition-all duration-300 cursor-pointer"
          >
            Hire Me
          </button>

          {/* burger menu */}
          <div>
            <HiBars3BottomRight onClick={openNav} className="h-8 w-8 text-white cursor-pointer lg:hidden"></HiBars3BottomRight>
          </div>
        </div>

        {/* button */}
      </div>
    </div>
  );
};

export default Nav;
