import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyRouter } from "./Routes";
import { RouterProvider } from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <RouterProvider router={MyRouter} />
  </React.StrictMode>
);
