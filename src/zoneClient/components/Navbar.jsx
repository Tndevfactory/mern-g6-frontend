import { Menu, LogOut } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../features/auth/authSlice";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(deleteUser());
    navigate("/login");
  };
  return (
    <div className="bg-white p-2 flex justify-between  border-b-2 h-10 ">
      <div id="logo_brand" className="flex items-center ">
        <span className="mr-2">
          <Menu />
        </span>
      </div>
      <button onClick={handleLogout}>
        <LogOut />
      </button>
    </div>
  );
};

export default Navbar;
