import React, { useEffect } from "react";
import { isSmallScreen, toggleSidebar } from "../../shared/utils/sidebarUtils";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";

const AdminLayout = ({ children }) => {
  useEffect(() => {
    if (isSmallScreen()) {
      toggleSidebar(); 
    }
  }, []);
  return (
    <> 
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Sidebar toggleMenu={toggleSidebar}/>
          <div className="layout-page">
            <Navbar toggleMenu={toggleSidebar}/>
              <div className="content-wrapper">
                <div className="container-xxl flex-grow-1 container-p-y">
                {children}
                </div>
              </div>
            <Footer />
            <div className="content-backdrop fade"></div>
          </div>
        </div>
        <div onClick={toggleSidebar} className="layout-overlay layout-menu-toggle"></div>
      </div>
    </>
  );
};

export default AdminLayout;
