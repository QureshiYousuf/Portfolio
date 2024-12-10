import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SideBar from "./SideBar";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="bg-[#282c34 min-h-screen text-black flex flex-col justify-between">
        <aside>
          <SideBar />
        </aside>

        {/* Navbar at the top */}
        <header>
          <Navbar />
        </header>

        {/* Main content should grow to take up available space */}
        <main className="flex-grow">
          <Outlet />
        </main>

        {/* Footer at the bottom */}
        <footer className="z-10 bg-white">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Layout;
