import React from "react";
//Styled Components
import styled from "styled-components";
//Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import artist from "../img/artist-small.jpg";
import neotokyo from "../img/neotokyo-small.jpg";
import wild from "../img/wild.jpg";
import escape from "../img/escape.jpg";
//Link for each movie page
import { Link } from "react-router-dom";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, fade, photoAnim, lineAnim } from "../animation";

import ScrollToTop from "../Components/ScrollTop";

// import { useScroll } from "../Components/useScroll";

const OurWork = () => {
  // const [element, controls] = useScroll();

  // const [element2, controls2] = useScroll();

  // const [element3, controls3] = useScroll();

  // const [element4, controls4] = useScroll();

  // const [element5, controls5] = useScroll();

  // const [element6, controls6] = useScroll();

  return (
    <Work
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img variants={photoAnim} src={athlete} alt="Athlete" />
          </Hide>
        </Link>
      </Movie>
      <Movie variants={fade}>
        <motion.h2 variants={fade}>The Racer</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-racer">
          <Hide>
            <motion.img variants={photoAnim} src={theracer} alt="Racer" />
          </Hide>
        </Link>
      </Movie>
      <Movie variants={fade}>
        <motion.h2 variants={fade}>Neo Tokyo</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/neo-tokyo">
          <Hide>
            <motion.img variants={photoAnim} src={neotokyo} alt="Neo Tokyo" />
          </Hide>
        </Link>
      </Movie>

      <Movie variants={fade}>
        <motion.h2 variants={fade}>Good Times</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/good-times">
          <Hide>
            <motion.img variants={photoAnim} src={goodtimes} alt="Goodtimes" />
          </Hide>
        </Link>
      </Movie>

      <Movie variants={fade}>
        <motion.h2 variants={fade}>Into the Wild</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/into-the-wild">
          <Hide>
            <motion.img variants={photoAnim} src={wild} alt="Wild" />
          </Hide>
        </Link>
      </Movie>

      <Movie variants={fade}>
        <motion.h2 variants={fade}>The Artist</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-artist">
          <Hide>
            <motion.img variants={photoAnim} src={artist} alt="The Artist" />
          </Hide>
        </Link>
      </Movie>

      <Movie variants={fade}>
        <motion.h2 variants={fade}>The Escape</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-escape">
          <Hide>
            <motion.img variants={photoAnim} src={escape} alt="The Escape" />
          </Hide>
        </Link>
      </Movie>
      <ScrollToTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  h2 {
    padding: 1rem 0rem;
  }
`;

const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

// //Frame Anims
// const Frame1 = styled(motion.div)`
//   position: fixed;
//   left: 0;
//   top: 10%;
//   width: 100%;
//   height: 100%;
//   background-color: #fffebf;
//   z-index: 2;
// `;

// const Frame2 = styled(Frame1)`
//   background-color: #ff8e8b;
// `;

// const Frame3 = styled(Frame1)`
//   background-color: #8ed2ff;
// `;

// const Frame4 = styled(Frame1)`
//   background-color: #8effa0;
// `;

export default OurWork;
