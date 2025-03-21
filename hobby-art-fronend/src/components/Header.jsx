import React, { useState } from "react";
import bgremoved from "../../public/images/logo2.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { useSelector } from "react-redux";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const totalItems = useSelector((state) => state.cart.totalItems);

  const headerlist = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact", path: "/contact" },
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
            className=" md:mt-14 font-bold  md:text-xl "
            key={index}
            to={item.path}
          >
            {item.name}
          </Link>
        ))}

        <Link className="mt-14" to={"/cart"}>
          {totalItems >= 0 && (
            <p className="font-bold md:text-xl inline-flex">
              <GiShoppingCart className="text-2xl" />
              Cart {totalItems}
            </p>
          )}
        </Link>
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
            <img src={bgremoved} className="w-40 -mb-5" />

            {headerlist.map((item, index) => (
              <Link key={index} to={item.path} onClick={() => setNavbar(false)}>
                <p className="ml-7 mb-4  font-semibold text-[#030e10]">
                  {item.name}
                </p>
              </Link>
            ))}
            <Link
              className="mt-14"
              to={"/cart"}
              onClick={() => setNavbar(false)}
            >
              {totalItems >= 0 && (
                <p className="inline-flex ml-7 mt-10  font-semibold text-[#030e10]">
                  <GiShoppingCart className="text-2xl" />
                  Cart {totalItems}
                </p>
              )}
            </Link>
          </div>

          <div className="mt-16 mr-2">
            <button className=" md:hidden" onClick={handlenav}>
              {navbar && <IoClose className="text-2xl " />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
