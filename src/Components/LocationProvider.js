import React from "react";
import { AnimatePresence } from "framer-motion";

const LocationProvider = ({ children }) => {
  return <AnimatePresence mode="wait">{children}</AnimatePresence>;
};

export default LocationProvider;
