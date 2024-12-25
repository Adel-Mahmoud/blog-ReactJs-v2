import React from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes"; 
import ClientLayout from '../layouts/ClientLayout';

const ClientRoutes = () => {
  return (
    <Routes>
      {routes.map(({ path, element: Component }) => (
        <Route
          key={path}
          path={path}
          element={<Component />}
        />
      ))}
      <Route
        path="*"
        element={
          <ClientLayout>
            <h3>Page Not Found 404</h3>
          </ClientLayout>
        }
      />
    </Routes>
  );
};

export default ClientRoutes;
