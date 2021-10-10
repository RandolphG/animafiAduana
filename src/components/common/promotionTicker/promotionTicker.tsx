import React, { useEffect, useRef, useState } from "react";
import "./styles/_promotionTickerStyles.scss";

/**
 * Promotion Ticker
 * @constructor
 */
const PromotionTicker = () => {
  const [showCoupon, setShowCoupon] = useState(true);
  const [showTooltip, setShowTooltip] = useState(true);
  const [timerText, setTimerText] = useState<any>(null);
  const couponCode = useRef(null);

  useEffect(() => {
    const timer = document.getElementById("timer");

    /* countDown timer */
    function countDown(x: MediaQueryList) {
      if (x.matches) {
        console.log("Mobile");
      } else {
        /* If media query matches */
        console.log("Desktop");
        /* Set the date we're counting down to */
        let countDownDate = new Date("Oct 04, 2021 00:00:00").getTime();

        /* Update the count down every 1 second */
        let x = setInterval(function () {
          /* Get today's date and time */
          let now = new Date().getTime();

          /* Find the distance between now and the count down date */
          let distance = countDownDate - now;

          /* Time calculations for days, hours, minutes and seconds */
          let days = Math.floor(distance / (1000 * 60 * 60 * 24));
          let hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );

          let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          let seconds = Math.floor((distance % (1000 * 60)) / 1000);

          if (timer) {
            /* Output the result in an element with id="demo" */
            setTimerText(`${days}d ${hours}h ${minutes}m ${seconds}s `);

            /* If the count down is over, write some text */
            if (distance < 0) {
              clearInterval(x);
              setTimerText("EXPIRED");
            }
          }
        }, 1000);
      }
    }

    let x = window.matchMedia("(max-width: 768px)");
    /* Call listener function at run time */
    countDown(x);

    /* Click to Copy */
    let tooltip = document.getElementById("myTooltip");
    let copyText = document.getElementById("couponCode") as HTMLInputElement;

    function myFunction() {
      if (copyText && tooltip) {
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
        tooltip.innerHTML = "Copied: " + copyText.value;
      }
    }

    function outFunc() {
      if (tooltip) {
        tooltip.innerHTML = "Copy to clipboard";
      }
    }
  }, []);

  function onMouseOut() {}

  function copied(e: any) {
    if (couponCode && couponCode.current) {
      // @ts-ignore
      couponCode.current?.select();
      document.execCommand("copy");
      e.target.focus();
    }
  }

  const ToolTip = () => (
    <div className="tooltip">
      <button onClick={copied} onMouseOut={onMouseOut}>
        <span className="tooltiptext" id="myTooltip">
          {showTooltip ? `Copy to clipboard` : `Copied: `}
        </span>
        Copy
      </button>
    </div>
  );

  const Coupon = ({ children }: any) => (
    <div className="coupon">{children}</div>
  );

  const closeButton = () => (
    <span onClick={() => setShowCoupon(!showCoupon)} className="close">
      x
    </span>
  );

  return (
    <div className="announcement" style={showCoupon ? {} : { display: "none" }}>
      {closeButton()}
      <div className="text">
        <span className="is-desktop">
          <strong>PROMOTION</strong>. Promotion text short description . Use
          Coupon
        </span>
        <span className="is-mobile">
          Use Coupon Code for <strong>50% OFF</strong>
        </span>
      </div>
      <Coupon>
        <input
          type="text"
          value="CODEPEN50"
          id="couponCode"
          readOnly
          ref={couponCode}
        />
        <ToolTip />
      </Coupon>
      <span id="timer" className="is-desktop">
        {timerText}
      </span>
    </div>
  );
};

export default PromotionTicker;
