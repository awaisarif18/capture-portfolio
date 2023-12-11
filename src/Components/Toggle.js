import React, { useState } from "react";
import { motion } from "framer-motion";
import FaqSection from "./FaqSection";
import styled from "styled-components";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <Question className="question" onClick={() => setToggle(!toggle)}>
      <motion.h4>{title}</motion.h4>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </Question>
  );
};

const Question = styled.div`
  cursor: pointer;
`;
export default Toggle;
