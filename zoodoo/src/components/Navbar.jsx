import React from "react";
import { useState } from "react";
import Button from "../components/Button";
import { navLinks } from "../constants/index";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  return (
    <div>
      <nav className="flex justify-between items-center py-4">
        {/* logo */}
        <div>
          <h1 className="font-secondary text-primaryGreen font-semibold text-2xl">
            ZOODO
          </h1>
        </div>

        {/* menu items */}
        <div>
          <ul className="list-none sm:flex hidden gap-4 items-center font-primary font-semibold">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  active === nav.title ? "text-primaryGreen" : "text-black"
                } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* buttons */}
        <div className="flex gap-2 items-center justify-between">
          <Button
            text="Sign Up/ Sign In"
            bgColor="bg-primaryGreen"
            textColor="text-white"
          />
          <FaShoppingCart size={20} />
          <FaUser size={20} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;