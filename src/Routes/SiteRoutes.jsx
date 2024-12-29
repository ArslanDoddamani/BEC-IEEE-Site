import React from "react";
import Home from "../components/Home/Home";
import { Route, Router, Routes } from "react-router-dom"; // Removed HashRouter import
import UnderConstruction from "../components/UnderConstruction/UnderConstruction";
import Notfound from "../components/NotFound/Notfound";
import Execoms from "../components/Execoms/Execoms";
import ScrollToTop from "../components/NotFound/ScrollToTop";

const SiteRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<UnderConstruction />} />
        <Route path="/events" element={<UnderConstruction />} />
        <Route path="/achievements" element={<UnderConstruction />} />
        <Route path="/execoms" element={<UnderConstruction />} />
        <Route path="/societies" element={<UnderConstruction />} />
        <Route path="/affinities" element={<UnderConstruction />} />
        <Route path="/membership" element={<UnderConstruction />} />
        <Route path="/photo-gallery" element={<UnderConstruction />} />
        <Route path="/joinIEEE" element={<UnderConstruction />} />
        <Route path="/execoms/:team/:year" element={<UnderConstruction />} />

        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
};

export default SiteRoutes;
