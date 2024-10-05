import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../zoneAdmin/components/Navbar";
import Sidebar from "../zoneAdmin/components/Sidebar";
import Unauthorized from "../zonePublic/pages/Unauthorized";
import { useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";

const AdminLayout = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  console.log(user);
  console.log(user.role);

  /*  if (user && Object.keys(user).length == 0) {
    return <Navigate to="/login" />;
  } */

  if (user.role !== "admin") {
    return <Unauthorized />;
  } else {
    return (
      <div className=" h-screen flex">
        <div id="left-part" className="bg-gray-100 border basis-[15rem]">
          <Sidebar />
        </div>
        <div id="right-part" className="flex-1">
          <div>
            <Navbar />
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    );
  }
};

export default AdminLayout;
