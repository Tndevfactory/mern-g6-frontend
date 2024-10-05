import { UserCheck, Store, Lock, UserCircle, ListOrdered } from "lucide-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <div
        id="title"
        className=" p-2 flex flex-col gap-2 justify-center items-center mt-3"
      >
        <img
          src={import.meta.env.VITE_SERVER_URL + user.imgUrl}
          className="h-20 rounded-full border border-gray-400"
          alt=""
        />
        <span className="font-medium text-xl capitalize"> {user.name} </span>
      </div>

      <div id="link" className="mt-6 p-2 space-y-3">
        <Link to="/" className="flex items-center  hover:text-blue-600">
          <Store size={21} className="inline-block mr-1" />
          Retour vers Store
        </Link>
        <a href="" className="flex items-center  hover:text-blue-600">
          <UserCircle size={21} className="inline-block mr-1" />
          Modifier information
        </a>
        <a href="" className="flex items-center hover:text-blue-600">
          <Lock size={21} className="inline-block mr-1" />
          Changer mot de passe
        </a>
        <a href="" className="flex items-center hover:text-blue-600">
          <ListOrdered size={21} className="inline-block mr-1" />
          Historique commande
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
