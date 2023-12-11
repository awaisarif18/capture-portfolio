import React from "react";
//Import icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
//importing image
import home2 from "../img/home2.png";
//Import Styles
import { About, Description, Image } from "../styles";
import styled from "styled-components";

const ServicesSection = () => {
  return (
    <Services>
      <Description>
        <h2>
          High <span>quality</span> services
          <Cards>
            <Card>
              <div className="icon">
                <img src={clock} alt="Clock icon" />
                <h3>Efficient</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>

            <Card>
              <div className="icon">
                <img src={diaphragm} alt="Diaphragm icon" />
                <h3>Diaphragm</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>

            <Card>
              <div className="icon">
                <img src={money} alt="Money icon" />
                <h3>Affordable</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>

            <Card>
              <div className="icon">
                <img src={teamwork} alt="Teamwork icon" />
                <h3>TeamWork</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
          </Cards>
        </h2>
      </Description>

      <Image>
        <img src={home2} alt="" />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 10rem;
  }

  h3 {
    font-size: 1rem;
  }

  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 5rem;
`;

const Card = styled.div`
  flex-basis: 16rem;
  .icon {
    display: flex;
    align-items: center;
  }

  h3 {
    margin-left: 1rem;
    background: white;
    color: black;
    padding: 1rem;
  }
`;

export default ServicesSection;
