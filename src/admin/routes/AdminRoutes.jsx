import React from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes"; 
import AdminLayout from "../layouts/AdminLayout";
import PrivateRoute from "../components/PrivateRoute";

const AdminRoutes = () => {
  return (
    <Routes>
      {routes.map(({ path, element: Component, private: isPrivate, layout: byLayout }) => (
        <Route
          key={path}
          path={path}
          element={
            byLayout ? (
              isPrivate ? (
                <PrivateRoute>
                  <AdminLayout>
                    <Component />
                  </AdminLayout>
                </PrivateRoute>
              ) : (
                <AdminLayout>
                  <Component />
                </AdminLayout>
              )
            ) : (
              isPrivate ? (
                <PrivateRoute>
                    <Component />
                </PrivateRoute>
              ) : (
                  <Component />
              )
            ) 
          }
        />
      ))}
      <Route
        path="*"
        element={
            <h3>Page Not Found 404</h3>
        }
      />
    </Routes>
  );
};

export default AdminRoutes;
