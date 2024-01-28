import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Introduction.css";
import IntroductionData from "./IntroductionData";
import card2Img from "../images/card1Img.jpg";

const Introduction = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setAnimate(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`title ${animate ? "animate" : ""}`}>
        <h1>Overview of Charity Donation:</h1>
        <br></br>
        <IntroductionData
          className="first-des"
          heading="Organization Details"
          Text="A clear and concise description of the organization's mission, goals, and the purpose of the fundraising campaign. Contact Information: Contact details, including the organization's official email address, phone number, and physical address (if applicable). Legal Status: Information on the legal status of the organization, including registration details and proof of non-profit status. Leadership Team:"
          contImg={card2Img}
        />
        <br></br>
        <br></br>
        <br></br>
        <IntroductionData
          className="first-des-reverse"
          heading="Fund Receiver Details"
          Text="A clear and concise description of the organization's mission, goals, and the purpose of the fundraising campaign. Contact Information: Contact details, including the organization's official email address, phone number, and physical address (if applicable). Legal Status: Information on the legal status of the organization, including registration details and proof of non-profit status. Leadership Team:"
          contImg={card2Img}
        />
      </div>
    </>
  );
};

export default Introduction;
