import React, { useState } from "react";
import bgremoved from "../../public/images/logo2.png";
import banner from "../../public/images/banner.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const headerlist = [
    { name: "Acrylic Colours", path: "/acrylic" },
    { name: "Oil Colours", path: "/oil" },
    { name: "DIY Bases", path: "/diy" },
  ];

  const handlenav = () => {
    setNavbar(!navbar);
  };

  return (
    <div className="relative  ">
    
      {/* Desktop Menu */}
      <div className="hidden md:relative md:z-10 md:flex justify-around md:space-x-4 ">
        <img src={bgremoved} className="md:w-56 md:-ml-14 md:-mt-10 " />

        {headerlist.map((item, index) => (
          <Link
            className=" md:mt-14 font-normal  md:text-lg"
            key={index}
            to={item.path}
          >
            {item.name}
          </Link>
        ))}
        <p className="md:mt-14 font-semibold md:text-lg">Login</p>
      </div>

      {/* show hamburger menu ico */}
      {!navbar && (
        <>
          <div className="flex relative justify-around">
            <img src={bgremoved} className="md:hidden w-32 -ml-8" />

            <button className=" md:hidden" onClick={handlenav}>
              <GiHamburgerMenu className="text-xl " />
            </button>
          </div>
        </>
      )}

      {/*small screen */}
      {navbar && (
        <div className="fixed flex justify-between top-0 left-0  h-full md:hidden  bg-[#d45e44]  w-3/4 p-5  ease-in-out z-50">
          <div className="">
            <img src={bgremoved} className="w-32 -mb-5" />

            {headerlist.map((item, index) => (
              <Link key={index} to={item.path}>
                <p className="ml-7 mb-4 font-normal text-sm text-[#030e10]">
                  {item.name}
                </p>
              </Link>
            ))}
            <p className="ml-7 mt-10 md:mt-14 font-semibold text-[#030e10]">
              Login
            </p>
          </div>

          <div className="mt-12 mr-2">
            <button className=" md:hidden" onClick={handlenav}>
              {navbar && <IoClose className="text-2xl " />}
            </button>
          </div>
        </div>
      )}

      <div className="relative md:-mb-52 ">
        <img src={banner} className="rounded-lg md:p-52 md:-mt-72 " />
      </div>
     
    </div>
  );
};

export default Header;
