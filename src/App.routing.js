import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./pages/auth/Auth";
import Login from "./pages/auth/login/Login";
import ForgotPassword from "./pages/auth/components/ForgotPassword";
import ResetPassword from "./pages/auth/components/ResetPassword";
import ThemeLayout from "./theme/ThemeLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import ProductLayout from "./pages/products/Product";
import ProductTable from "./pages/products/components/ProductTable";
import AddProduct from "./pages/products/components/AddProduct";
import SupplierLayout from "./pages/suppliers/Suppliers";
import SupplierTable from "./pages/suppliers/components/StockTable";
import AddStock from "./pages/suppliers/components/AddStock";
// import Header from "./theme/components/Header";
import BillingLayout from "./pages/billing/Billing";
import CustomersLayout from "./pages/customers/Customer";
import CustomersTable from "./pages/customers/components/CustomerTable";
import AddCustomer from "./pages/customers/components/AddCustomer";
import { AddSupplier } from "./pages/suppliers/components/AddSupplier";

const appRouter = createBrowserRouter([
  {
    path: "",
    element: <AuthLayout />,
    children: [
      { path: "", element: <Login /> },
      { path: "forgot-password", element: <ForgotPassword /> },
      { path: "reset-password", element: <ResetPassword /> },
    ],
  },
  {
    path: "/app",
    element: <ThemeLayout />,
    children: [
      { path: "/app/dashboard", element: <Dashboard /> },
      {
        path:'/app/billing',element:<BillingLayout/>,children:[
        ]
      },
      {
        path:"/app/customers",element:<CustomersLayout/>,children:[
          {path:"/app/customers/list",element:<CustomersTable/>},
          {path:'/app/customers/add-customer',element:<AddCustomer/>}
        ]
      },
      {
        path: "/app/product",
        element: <ProductLayout />,
        children: [
          { path: "/app/product/list", element: <ProductTable /> },
          { path: "/app/product/add-product", element: <AddProduct /> },
        ],
      },
      {
        path: "/app/supply",
        element: <SupplierLayout />,
        children: [
          { path: "/app/supply/list", element: <SupplierTable /> },
          {
            path: "/app/supply/add-stock",
            element: <AddStock />,
          },
          {
            path:"/app/supply/add-supplier",element:<AddSupplier/>
          }
        ],
      },
    ],
  },
  {
    path:'',
  }
]);

export default appRouter;
