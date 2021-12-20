import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";

import { RequireAuth } from "./RequireAuth";

const AppRoutes = () => (
  <BrowserRouter>
    <Suspense fallback={null}>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default AppRoutes;
