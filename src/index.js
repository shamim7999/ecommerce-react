import React from "react";
import ReactDOM from "react-dom/client";
import Helper from "./Helper";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "./pages/Test";
import ShoppingCart from "./pages/Cart";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Helper />} />
        <Route path="/test" element={<Test />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
