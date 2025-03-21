import React from "react";
import bgremoved from "../../public/images/logo2.png";
import { Link } from "react-router";

const Footer = () => {
  const footer = [
    { name: "Home", path: "/" },
    { name: "DIY Kits", path: "#" },
    { name: "DIY Bases", path:"#" },
    { name: "Canvas", path:"#" },
    { name: "Home Decor", path: "#" },
    { name: "Gifts By Recipient", path: "#" },
    { name: "Kids", path: "#" },
    { name: "Boxes", path:"#" },
    { name: "Wall Clock", path: "#" },
    { name: "Photo Print", path: "#"},
    { name: "Best Selling", path:"#" },
    { name: "Review", path: "#"},
    { name: "Blogs", path:"#"},
    { name: "Tutorial", path:"#"},
    { name: "About Us", path:"#"  },
    { name: "Contact", path: "#" },
  ];

  return (
    <footer className="relative text-center bg-[#ffffff67] p-10">
      <div className="">
        <img src={bgremoved} className="w-52 " />
        <div className="flex md:justify-around md:-mt-16 flex-col md:flex-row">
          {/* Footer Links */}
          <div className="flex gap-10">
            <div className="text-left font-semibold text-lg">
              {footer.slice(0, 5).map((item, index) => (
                <ul key={index}>
                  <Link to={item.path}>
                    <li className="">{item.name}</li>
                  </Link>
                </ul>
              ))}
            </div>
            <div className="text-left font-semibold text-lg">
              {footer.slice(5, 10).map((item, index) => (
                <ul key={index}>
                  <Link to={item.path}>
                    <li className="">{item.name}</li>
                  </Link>
                </ul>
              ))}
            </div>
            {/* Contact Information
            <div className="md:mt-0 font-semibold text-lg ">
              <p>becreative@gmail.com</p>
              <p>+00 888 100 324</p>
              <p>10092, Brigade, </p>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
