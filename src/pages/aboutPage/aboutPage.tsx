import React from "react";
import { ScrollDownArrow } from "../../components";
import { AboutPageViewModel } from "./aboutPageViewModel";
import { statements } from "./utils";
import "./styles/_aboutPageStyles.scss";

const AboutPage = () => {
  AboutPageViewModel();

  return (
    <div key="aboutPage" className="container">
      <section className="background">
        <div className="content-wrapper">
          <p className="content-title">
            Animafi Aduana Development Association Inc.
          </p>
          <p className="content-subtitle">
            <ScrollDownArrow />
          </p>
        </div>
      </section>
      {statements.map(({ title, text }, idx) => (
        <section key={`statement-${idx}`} className="background">
          <div className="content-wrapper">
            {title && <p className="content-title">{title}</p>}
            <p className="content-mission-statement">{text}</p>
            <p className="content-subtitle">
              <ScrollDownArrow />
            </p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default AboutPage;
