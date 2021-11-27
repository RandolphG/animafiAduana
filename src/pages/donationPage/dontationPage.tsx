import { motion } from "framer-motion";
import React from "react";
import { images } from "../../resources";
import { DonationPageViewModel } from "./donationPageViewModel";
import "./styles/_donationPaegStyles.scss";

const DonationPage = () => {
  const { buttonUrl, embeddedUrl } = DonationPageViewModel();

  const DonorButton = () => (
    <button id="donorButton">
      <a className="dbox-donation-button" href={buttonUrl}>
        Donorbox
      </a>
    </button>
  );

  const Paypal = () => (
    <div className="paypalButtonContainer">
      <a
        id="paypal-donate-button-container"
        href="https://www.paypal.com/"
        target="_blank"
      >
        <span>
          <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_top"
          >
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input
              type="hidden"
              name="hosted_button_id"
              value={process.env.REACT_APP_PAYPAL_CLIENT_ID}
            />
            <input
              type="image"
              src={images.paypalImage}
              name="submit"
              title="PayPal - The safer, easier way to pay online!"
              alt=""
            />
          </form>
        </span>
      </a>
    </div>
  );

  const Footer = () => (
    <p
      style={{
        position: "absolute",
        fontSize: ".9rem",
        color: "white",
        bottom: "1rem",
      }}
    >
      Animafi Aduana Development Association. Inc.A tax exempt organization
      under section 501(C)(3)of the US IRS code.
    </p>
  );

  const Stripe = () => (
    <div
      style={{
        boxSizing: "border-box",
        border: "2px solid white",
        marginLeft: "1rem",
        padding: "1rem 4rem",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: " #41a2d8",
      }}
    >
      STRIPE
    </div>
  );

  const motionSettings = {
    initial: {
      opacity: 0,
      y: "-100vh",
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: "-100vh",
    },
  };

  return (
    <motion.div {...motionSettings} className="donateContainer">
      <p className="message">Here are some ways you can help.</p>
      <div
        style={{ display: "flex", flexDirection: "row", marginTop: "1.5rem" }}
      >
        <DonorButton />
        <Paypal />
        <Stripe />
      </div>
      <Footer />
    </motion.div>
  );
};

export default DonationPage;
