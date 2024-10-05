import React from "react";
import {
  Settings,
  BarChart4,
  Barcode,
  ArrowLeftRight,
  Store,
} from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div
        id="admin_zone"
        className="mb-6 p-4 flex flex-col justify-center items-center"
      >
        <Settings />
        <span className="text-lg font-semibold">Zone administration</span>
      </div>

      <div id="admin_links">
        <Link to="/" className="flex ml-2 mb-3">
          <Store />
          <span className="ml-2">Retour au store</span>
        </Link>
        <Link to="/admin" className="flex ml-2 mb-3">
          <BarChart4 />
          <span className="ml-2">Tableau de bord</span>
        </Link>

        <Link to="/admin/gestion-produits" className="flex ml-2 mb-3">
          <Barcode />
          <span className="ml-2">Gestion des produits</span>
        </Link>
        <Link to="/admin/mouvements-stock" className="flex ml-2 mb-3">
          <ArrowLeftRight />
          <span className="ml-2">Mouvements stock</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
