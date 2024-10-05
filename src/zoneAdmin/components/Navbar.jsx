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
    <div className="bg-white p-2 flex justify-between h-12">
      <div id="admin_menu" className="flex items-center ">
        <span className="mr-2">
          <Menu />
        </span>
      </div>
      <div id="admin_logout" className="flex gap-2">
        <span>Bonjour Admin,</span>
        <button onClick={handleLogout}>
          <LogOut />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
