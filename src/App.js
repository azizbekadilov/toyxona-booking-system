import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import HallDetail from "./pages/HallDetail";
import AdminPanel from "./pages/AdminPanel";
import OwnerPanel from "./pages/OwnerPanel";

function App() {

  return (

    <Router>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/hall" element={<HallDetail />} />

        <Route path="/admin" element={<AdminPanel />} />

        <Route path="/owner" element={<OwnerPanel />} />

      </Routes>

      <Footer />

    </Router>

  );

}

export default App;