import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex text-[1.0625rem] font-[500] gap-[1.5rem] text-textColor">
        <li className="!text-darkGreen cursor-pointer">Home</li>
        <li className="cursor-pointer">About Us</li>
        <li className="cursor-pointer">Nutritional Information</li>
        <li className="cursor-pointer">Blogs</li>
        <li className="cursor-pointer">Corporate</li>
        <li className="cursor-pointer">Contact Us</li>
      </ul>
    </nav>
  );
};

export { Navbar };
