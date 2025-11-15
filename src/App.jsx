import React, { useEffect } from "react";
import Footer from "./components/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage";
import WorkDetails from "./pages/WorkDetails";

const App = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  return (
    <div>
     
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/work/:id" element={<WorkDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
