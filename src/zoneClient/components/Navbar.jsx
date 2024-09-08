import { Hexagon } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white p-2 flex justify-between  ">
      <div id="logo_brand" className="flex items-center ">
        <span className="mr-2">
          <Hexagon />
        </span>
        <span className="text-lg">E-store</span>
      </div>
      <div id="login">
        <span>login</span>
      </div>
    </div>
  );
};

export default Navbar;
