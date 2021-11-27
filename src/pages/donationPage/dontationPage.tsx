import React, { useEffect } from "react";
import "./styles/_donationPaegStyles.scss";
import { images } from "../../resources";
import { DonationPageViewModel } from "./donationPageViewModel";

const DonationPage = () => {
  const { buttonUrl, embeddedUrl } = DonationPageViewModel();

  const Embeded = () => (
    <div className="donation">
      <div className="donation__title">DonationPage</div>
      <iframe
        className="donation__donorBox"
        src={embeddedUrl}
        name="donorbox" //@ts-ignore
        allowpaymentrequest={true}
        seamless
        frameBorder="0"
        scrolling="no"
        height="900px"
        width="100%"
      />
    </div>
  );

  const DonorButton = () => (
    <button id="donorButton">
      <a className="dbox-donation-button" href={buttonUrl}>
        Donorbox
      </a>
    </button>
  );

  return (
    <div
      style={{
        boxSizing: "border-box",
        width: "100%",
        height: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p
        style={{
          fontSize: "2rem",
          color: "white",
        }}
      >
        Here are some ways you can help.
      </p>
      <div
        style={{ display: "flex", flexDirection: "row", marginTop: "1.5rem" }}
      >
        <DonorButton />
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
                {/*<img src={images.paypalImage} alt="" />*/}
              </form>
            </span>
          </a>
        </div>
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
      </div>
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
    </div>
  );
};

export default DonationPage;
