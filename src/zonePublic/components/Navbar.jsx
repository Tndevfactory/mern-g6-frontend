import { Hexagon, ShoppingBag, LogIn, Menu } from "lucide-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../features/auth/authSlice";
import { useNavigate, Link } from "react-router-dom";
import MobileDrawer from "./MobileDrawer";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [visibleUserPanel, setVisibleUserPanel] = useState(false);
  const [visibleDrawer, setVisibleDrawer] = useState(false);

  const handleLogout = () => {
    dispatch(deleteUser());
    navigate("/login");
  };

  const mobileDrawerProps = { visibleDrawer, setVisibleDrawer };

  return (
    <div
      className="bg-white p-2 h-[4rem] 
    flex justify-between items-center "
    >
      <div id="logo_brand" className=" flex items-center ">
        <div>
          <button
            onClick={() => setVisibleDrawer(true)}
            id="trigger-mobile-drawer"
            className="mr-2 md:hidden"
          >
            <Menu />
          </button>
          {visibleDrawer && <MobileDrawer {...mobileDrawerProps} />}
        </div>

        <span className="mr-2">
          <Hexagon />
        </span>
        <span className="text-xl font-semibold">E-store</span>
      </div>
      <div id="right" className="flex gap-2 justify-center  items-center">
        <div className="hidden md:block space-x-2">
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
        </div>

        {Object.keys(user).length == 0 ? (
          <Link to="/login">
            <LogIn />
          </Link>
        ) : (
          <div
            onMouseEnter={() => setVisibleUserPanel(true)}
            onMouseLeave={() => setVisibleUserPanel(false)}
            id="userProfil"
            className=" relative flex gap-1 items-center mx-2 cursor-pointer"
          >
            <img
              src={import.meta.env.VITE_SERVER_URL + user.imgUrl}
              className="h-8 rounded-full border border-gray-400"
              alt=""
            />
            {visibleUserPanel && (
              <div
                id="userPanel"
                className="absolute right-2 top-7 z-30 bg-white shadow-lg rounded w-[10rem] border"
              >
                <span className="block p-1 pl-2 font-semibold capitalize">
                  {user.name}
                </span>
                <Link
                  to="/user"
                  className="block p-1 pl-2  hover:bg-blue-600 hover:text-white"
                >
                  Voir profil
                </Link>
                <span
                  onClick={handleLogout}
                  className="block p-1 pl-2 cursor-pointer hover:bg-blue-600 hover:text-white"
                >
                  Se deconnecter
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
