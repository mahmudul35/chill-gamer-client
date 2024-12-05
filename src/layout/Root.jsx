import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const Root = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="min-h-[calc(100vh-288px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
