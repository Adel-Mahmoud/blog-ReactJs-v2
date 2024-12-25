import React from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminRoutes from "./admin/routes/AdminRoutes";
import ClientRoutes from "./client/routes/ClientRoutes";
import { LoadingProvider } from "./shared/context/LoadingContext";
import Loading from "./shared/components/loading/Loading";

function AppRouter() {
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith("/admin");

  return isAdminRoute ? <AdminRoutes /> : <ClientRoutes />;
}

function App() {
  return (
    <>
      <LoadingProvider>
        <Loading/>
        <ToastContainer />
        <Router>
          <AppRouter />
        </Router>
      </LoadingProvider>
    </>
  )
}

export default App