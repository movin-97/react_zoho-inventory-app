import { Navigate } from "react-router-dom";
import Inventory from "../Pages/Dashboard/Dashboard";
import Login from "../Pages/Login/Login";
import Home from "./../Pages/Home/Home";
import DashboardItemGroups from '../Pages/Inventory/InventoryItemGroups';
import Dashboard from '../Pages/Inventory/InventoryItem';

const router = [
  {
    path: "/",
    component: <Login />,
  },
  {
    path: "/login",
    component: <Login />,
  },
  {
    path: "/home",
    component: <Home />,
    children: [
      {
        path: "",
        component: <Navigate to={"inventory"} replace />,
      },
      {
        path: "inventory",
        component: <Inventory />,
      },
      {
        path: "items",
        component: <Dashboard />,
      },
      {
        path: "items-groups",
        component: <DashboardItemGroups />,
      },
    ],
  },
];

export default router;
