import React from "react";
import { useLocation } from "react-router-dom";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import OurWork from "../Pages/OurWork";
import MovieDetail from "../Pages/MovieDetail";
import { Route, Routes } from "react-router-dom";

const RoutesWithAnimation = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.key}>
      <Route path="/" element={<AboutUs />} />
      <Route path="/work" element={<OurWork />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/work/:id" element={<MovieDetail />} />
    </Routes>
  );
};

export default RoutesWithAnimation;
