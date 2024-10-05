import React from "react";
import { useNavigate, Link } from "react-router-dom";

const MobileDrawer = (props) => {
  const { visibleDrawer, setVisibleDrawer } = props;
  return (
    <div
      onClick={() => setVisibleDrawer(false)}
      id="backdrop"
      className=" absolute inset-0 bg-black/70 z-40 "
    >
      <div className=" h-screen absolute bg-white  top-0 left-0 w-3/4 z-50 shadow-xl border-r-2 ">
        <div className="  flex justify-between items-center p-2">
          <span>E-store</span>
          <button onClick={() => setVisibleDrawer(false)}>X</button>
        </div>

        <div className=" flex flex-col gap-4 p-4">
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
      </div>
    </div>
  );
};

export default MobileDrawer;
