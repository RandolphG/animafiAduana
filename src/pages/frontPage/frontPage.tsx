import React, { useEffect, useState } from "react";
import { AUTOCHANGE_TIME, slides } from "./utils";
import classNames from "classnames";
import "./styles/_frontPageStyles.scss";
import { motion } from "framer-motion";

interface ISlideState {
  activeSlide: number;
  prevSlide: number;
  sliderReady: boolean;
}

/**
 * Front Page
 */
const FrontPage: React.FC = () => {
  const IMAGE_PARTS: number = 4;
  let changeTO: any = null;
  const { length } = slides;

  const [slideState, setSlideState] = useState<ISlideState>({
    activeSlide: -1,
    prevSlide: -1,
    sliderReady: false,
  });

  /* auto change the images */
  const runAutochangeTO = () => {
    changeTO = setTimeout(() => {
      changeSlides(1);
      runAutochangeTO();
    }, AUTOCHANGE_TIME);
  };

  /* change the slides */
  const changeSlides = (change: number) => {
    clearTimeout(changeTO);
    const prevSlide: number = slideState.activeSlide;
    let activeSlide: number = prevSlide + change;

    if (activeSlide < 0) {
      activeSlide = length - 1;
    }

    if (activeSlide >= length) {
      activeSlide = 0;
    }

    setSlideState({ ...slideState, activeSlide, prevSlide });
  };

  useEffect(() => {
    runAutochangeTO();
    /*setTimeout(() => {
      setSlideState({ ...slideState, activeSlide: 0, sliderReady: true });
    }, 0);
  */ return () => {
      clearTimeout(changeTO);
    };
  });

  const partsOfImages = ({ slide }: any) => (
    <div className="slider__slide-parts">
      {[...Array(IMAGE_PARTS).fill(undefined)].map((x, i) => (
        <div className="slider__slide-part" key={i}>
          <div
            className="slider__slide-part-inner"
            style={{ backgroundImage: `url(${slide.img})` }}
          />
        </div>
      ))}
    </div>
  );

  const slideContent = ({ slide }: any) => (
    <div className="slider__slide-content">
      <h3 className="slider__slide-subheading">
        {slide.country || slide.city}
      </h3>
      <h2 className="slider__slide-heading">
        {slide.city.split("").map((l: any, i: number) => (
          <span key={i}>{l}</span>
        ))}
      </h2>
      <p className="slider__slide-readmore">read more</p>
    </div>
  );

  const Slide = ({ slide, index, children }: any) => (
    <div
      className={classNames("slider__slide", {
        "s--active": slideState.activeSlide === index,
        "s--prev": slideState.prevSlide === index,
      })}
      key={slide.city}
    >
      {children}
    </div>
  );

  const motionSettings = {
    initial: { opacity: 0, scale: 0, y: -25 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: { opacity: 0, y: -25 },
  };

  return (
    <div
      className={classNames("slider", { "s--ready": slideState.sliderReady })}
    >
      <p className="slider__top-heading">
        Animafi Aduana Development Organization
      </p>
      <div className="slider__slides">
        {slides.map((slide: any, index: number) => (
          <div
            className={classNames("slider__slide", {
              "s--active": slideState.activeSlide === index,
              "s--prev": slideState.prevSlide === index,
            })}
            key={slide.city}
          >
            {slideContent({ slide })}
            {partsOfImages({ slide })}
          </div>
        ))}
      </div>
      <div className="slider__control" onClick={() => changeSlides(-1)} />
      <div
        className="slider__control slider__control--right"
        onClick={() => changeSlides(1)}
      />
    </div>
  );
};

export default FrontPage;
