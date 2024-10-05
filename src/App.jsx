import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Zone public
import Home from "./zonePublic/pages/Home";
import Contact from "./zonePublic/pages/Contact";
import Pratique from "./zonePublic/pages/Pratique";
import NotFound from "./zonePublic/pages/NotFound";
import Unauthorized from "./zonePublic/pages/Unauthorized";

//Zone auth
import Login from "./zoneAuth/Login";
import Register from "./zoneAuth/Register";

//Zone Admin
import Dashboard from "./zoneAdmin/Dashboard";
import ManageProducts from "./zoneAdmin/products/ManageProducts";
import StockMovements from "./zoneAdmin/stock/StockMovements";

//Zone Client
import Profile from "./zoneClient/pages/Profile";

//Zone Layouts
import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";
import ClientLayout from "./layouts/ClientLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="gestion-produits" element={<ManageProducts />} />
          <Route path="mouvements-stock" element={<StockMovements />} />
        </Route>

        <Route path="/user" element={<ClientLayout />}>
          <Route index element={<Profile />} />
        </Route>

        {/* test unauthorize */}
        <Route path="/unauthorized" element={<Unauthorized />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pratique" element={<Pratique />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
