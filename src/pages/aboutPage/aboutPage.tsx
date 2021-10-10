import React, { useEffect } from "react";
import $ from "jquery";
import _ from "lodash";
import "./styles/_aboutPageStyles.scss";
import { ScrollDownArrow } from "../../components";

const AboutPage = () => {
  let scrollSensitivitySetting: number = 30; //Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive)
  let slideDurationSetting: number = 600; //Amount of time for which slide is "locked"
  let currentSlideNumber: number = 0;
  let ticking: boolean = false;
  let isFirefox: boolean = /Firefox/i.test(navigator.userAgent);
  let isIe: boolean =
    /MSIE/i.test(navigator.userAgent) ||
    /Trident.*rv\:11\./i.test(navigator.userAgent);

  let totalSlideNumber: any = $(".background").length;

  useEffect(() => {
    // ------------- VARIABLES ------------- //

    // ------------- DETERMINE DELTA/SCROLL DIRECTION ------------- //
    function parallaxScroll(evt: any) {
      let delta: any;
      if (isFirefox) {
        //Set delta for Firefox
        delta = evt.detail * -120;
      } else if (isIe) {
        //Set delta for IE
        delta = -evt.deltaY;
      } else {
        //Set delta for all other browsers
        delta = evt.wheelDelta;
      }

      if (!ticking) {
        if (delta <= -scrollSensitivitySetting) {
          //Down scroll
          ticking = true;
          if (currentSlideNumber !== totalSlideNumber - 1) {
            currentSlideNumber++;
            nextItem();
          }
          slideDurationTimeout(slideDurationSetting);
        }
        if (delta >= scrollSensitivitySetting) {
          //Up scroll
          ticking = true;
          if (currentSlideNumber !== 0) {
            currentSlideNumber--;
          }
          previousItem();
          slideDurationTimeout(slideDurationSetting);
        }
      }
    }

    // ------------- SET TIMEOUT TO TEMPORARILY "LOCK" SLIDES ------------- //
    function slideDurationTimeout(slideDuration: number) {
      setTimeout(function () {
        // @ts-ignore
        ticking = false;
      }, slideDuration);
    }

    // ------------- ADD EVENT LISTENER ------------- //
    // @ts-ignore
    let mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
    // @ts-ignore
    window.addEventListener(
      mousewheelEvent,
      // @ts-ignore
      _.throttle(parallaxScroll, 60),
      false
    );

    // ------------- SLIDE MOTION ------------- //
    function nextItem() {
      // @ts-ignore
      let $previousSlide = $(".background").eq(currentSlideNumber - 1);
      $previousSlide.removeClass("up-scroll").addClass("down-scroll");
    }

    function previousItem() {
      // @ts-ignore
      let $currentSlide = $(".background").eq(currentSlideNumber);
      $currentSlide.removeClass("down-scroll").addClass("up-scroll");
    }
  });

  return (
    <div className="container">
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
      <section className="background">
        <div className="content-wrapper">
          <p className="content-title">MISSION STATEMENT</p>
          <p className="content-mission-statement">
            The primary mission of our association is to help the rehabilitation
            and sustainable development of Animafi Aduana people of Obo Kwahu in
            Ghana. Therefore, we strive to fund and create innovative,
            collaborative solutions for the urgently needed services and
            restoration of facilities for the underprivileged people.
          </p>
        </div>
      </section>
      <section className="background">
        <div className="content-wrapper">
          <p className="content-mission-statement">
            The Animafi Aduana Development Association has a diverse range of
            backgrounds and skill sets, but we share a common passion for
            improving the life conditions of the underprivileged people.
            Encouraging them to continue to live in their own communities. We
            work hard to accomplish our mission.
          </p>
        </div>
      </section>
      <section className="background">
        <div className="content-wrapper">
          <p className="content-mission-statement">
            We believe a fearless approach is what is needed to address the
            objectives at hand. Taking such an approach enables us to make
            transformative changes. We believe real impact can be made when we
            rely on our strong foundation to guide our activities and
            collaborations as we work to uncover new, more impactful ways of
            addressing chronic social challenges.
          </p>
        </div>
      </section>
      <section className="background">
        <div className="content-wrapper">
          <p className="content-mission-statement">
            Animafi Aduana Development Association is a non-profit organization
            established in order to reconnect Animafi Aduana communities living
            abroad. As we grow as an organization we will strive to improve the
            life conditions of the Animafi Aduana people of Obo Kwahu Ghana.{" "}
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
