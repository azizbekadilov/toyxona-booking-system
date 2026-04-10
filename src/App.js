import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import HallDetail from "./pages/HallDetail";
import AdminPanel from "./pages/OwnerPanel";   // booking approve
import OwnerPanel from "./pages/AdminPanel";   // toyxona CRUD
import Login from "./pages/Login";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  const user = JSON.parse(localStorage.getItem("user"));

  return (

    <Router>

      <div className="flex flex-col min-h-screen">

        {user && <Navbar />}

        <div className="flex-grow">

          <Routes>

            <Route
              path="/"
              element={
                user ? <Home /> : <Navigate to="/login" />
              }
            />

            <Route path="/login" element={<Login />} />

            <Route
              path="/hall/:id"
              element={
                <ProtectedRoute>
                  <HallDetail />
                </ProtectedRoute>
              }
            />

            {/* OWNER */}
            <Route
              path="/owner"
              element={
                <ProtectedRoute>
                  <OwnerPanel />
                </ProtectedRoute>
              }
            />

            {/* ADMIN */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute role="admin">
                  <AdminPanel />
                </ProtectedRoute>
              }
            />

          </Routes>

        </div>

        {user && <Footer />}

      </div>

    </Router>

  );
}

export default App;