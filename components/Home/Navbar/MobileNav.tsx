import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};
const MobileNav = ({ showNav, closeNav }: Props) => {
  
  return (
 <div>
     <div className={`fixed inset-0 z-50 bg-black opacity-70 w-full h-screen 
    ${showNav ? "block" : "hidden"}`} >
      
    </div>

    {/* navLinks */}
      <div className={`fixed top-0 left-0 h-full w-[80%] sm:w-[60%] bg-[#0f0715]
    text-white flex flex-col justify-center space-y-6 z-50
    transform transition-transform duration-1000
    ${showNav ? "translate-x-0" : "-translate-x-full"}`}>
        {NavLinks.map((navLink) => {
          return (
            <Link key={navLink.id} href={navLink.url}>
              <p className="nav_link ml-12 text-3xl!  pb-2 ">{navLink.label}</p>
            </Link>
          );
        })}
        {/* close button */}
        <CgClose onClick={closeNav} className="absolute top-[0.7rem] right-[1.3rem] w-12 h-12 text-white font-bold"></CgClose>
      </div>
 </div>
  );
};

export default MobileNav;
