import { Hexagon, ShoppingBag } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  return (
    <div
      className="bg-white p-2 h-[4rem] 
    flex justify-between items-center "
    >
      <div id="logo_brand" className="mt-2 flex items-center ">
        <span className="mr-2">
          <Hexagon />
        </span>
        <span className="text-lg">E-store</span>
      </div>
      <div id="right" className="flex gap-1 items-center">
        <Link to="/" className="text-md hover:text-blue-600">
          Accueil
        </Link>
        <a href="" className="text-md hover:text-blue-600">
          Services
        </a>
        <a href="" className="text-md hover:text-blue-600">
          Produits
        </a>
        <Link to="/contact" className="text-md hover:text-blue-600">
          Contact
        </Link>
        <div id="userProfil" className="flex gap-1 items-center mx-2">
          <span className="text-lg font-medium capitalize">{user.name}</span>
          <img
            src={import.meta.env.VITE_SERVER_URL + user.imgUrl}
            className="h-8 rounded-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
