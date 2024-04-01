import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Helper from "./Helper";
import MakeOrder from "./pages/Checkout";
import Test from "./pages/Test";
import ShoppingCart from "./pages/Cart";
import Success from "./components/Success";
import ProductDetail from "./components/Detail";
import Error from "./components/Error";

export const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <Helper />,
  },

  {
    path: "/checkout",
    element: <MakeOrder />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/cart",
    element: <ShoppingCart />,
  },
  {
    path: "/success",
    element: <Success />,
  },
  {
    path: "/details",
    element: <ProductDetail />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);
