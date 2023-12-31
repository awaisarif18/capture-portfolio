import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions? <span>FAQ</span>
      </h2>

      <Toggle title="How Do I Start?">
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis,
            expedita!
          </p>
        </div>
      </Toggle>

      <Toggle title="Daily Schedule">
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis,
            expedita!
          </p>
        </div>
      </Toggle>

      <Toggle title="Different Payment Methods">
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis,
            expedita!
          </p>
        </div>
      </Toggle>

      <Toggle title="What services you offer?">
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis,
            expedita!
          </p>
        </div>
      </Toggle>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }

  .question {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
