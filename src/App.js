import React, { useEffect, useState } from "react";
import AboutUs from "./Pages/AboutUs";
import GlobalStyle from "./Components/GlobalStyle";
import Nav from "./Components/Nav";
import OurWork from "./Pages/OurWork";
import ContactUs from "./Pages/ContactUs";
import MovieDetail from "./Pages/MovieDetail";
//Router
import { Routes, Route, useLocation } from "react-router-dom";
//Animations
import { AnimatePresence } from "framer-motion";
import LocationProvider from "./Components/LocationProvider";
import RoutesWithAnimation from "./Components/RoutesWithAnimation";

function App({}) {
  const [state1, setState1] = useState(1);

  useEffect(() => {
    setState1((pre) => pre + 2);
    console.log(state1);
  }, []);

  return (
    <div className="App">
      <Nav />
      <GlobalStyle />
      <LocationProvider>
        <RoutesWithAnimation />
      </LocationProvider>
    </div>
  );
}

export default App;
