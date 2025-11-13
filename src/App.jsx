import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import WorkDetails from "./pages/WorkDetails";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/work/:id" element={<WorkDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
