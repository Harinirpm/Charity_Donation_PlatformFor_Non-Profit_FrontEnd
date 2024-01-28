import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import OrgCardData from "./OrgCardData";
import card2Img from "../images/card1Img.jpg";
import "./OrgCardStyles.css";

function OrgCard() {
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
      <div className={`orgcard ${animate ? "animate" : ""}`}>
        <h1>Here You Can Proceed for Donate! </h1>
        <p>
          Information on the legal status of the organization, including
          registration details and proof of non-profit status.
        </p>
        <div className="card1">
          <OrgCardData
            card="t-card"
            image="t-image"
            cardImg={card2Img}
            heading="organization"
            text="Names and brief bios of key team members or leaders involved in the organization."
            btnClass1="display"
            url="/Organization"
            buttonText1="Create Profile"
          />

          <OrgCardData
            card="f-card"
            image="f-image"
            cardImg={card2Img}
            heading="Fund Receiver"
            text="Names and brief bios of key team members or leaders involved in the organization."
            btnClass1="display-here"
            url="/FundReceiver"
            buttonText1="click here to donate"
          />
        </div>
      </div>
    </>
  );
}

export default OrgCard;
