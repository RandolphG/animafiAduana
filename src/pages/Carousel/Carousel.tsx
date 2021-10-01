import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import './styles/carouselStyles.scss'

const slides = [
  {
    city: 'Paris',
    country: 'France',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/paris.jpg',
  },
  {
    city: 'Singapore',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/singapore.jpg',
  },
  {
    city: 'Prague',
    country: 'Czech Republic',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/prague.jpg',
  },
  {
    city: 'Amsterdam',
    country: 'Netherlands',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/amsterdam.jpg',
  },
  {
    city: 'Moscow',
    country: 'Russia',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/moscow.jpg',
  },
]

const Carousel = () => {
  const IMAGE_PARTS = 4
  let changeTO: any = null
  const AUTOCHANGE_TIME = 4000

  const [activeSlide, setActiveSlide] = useState(-1)
  const [prevSlide, setPrevSlide] = useState(-1)
  const [sliderReady, setSliderReady] = useState(false)

  useEffect(() => {
    return window.clearTimeout(changeTO)
  })

  function runAutochangeTO() {
    changeTO = setTimeout(() => {
      changeSlides(1)
      runAutochangeTO()
    }, AUTOCHANGE_TIME)
  }

  function changeSlides(change: any) {
    window.clearTimeout(changeTO)
    const { length } = slides
    setPrevSlide(activeSlide)
    let currentActiveSlide = prevSlide + change

    if (currentActiveSlide < 0) {
      const value = length - 1
      setActiveSlide(value)
    }

    if (currentActiveSlide >= length) {
      setActiveSlide(0)
    }
  }

  return (
    <div className={classNames('slider', { 's--ready': sliderReady })}>
      <p className="slider__top-heading">Travelers</p>
      <div className="slider__slides">
        {slides.map((slide, index) => (
          <div
            className={classNames('slider__slide', {
              's--active': activeSlide === index,
              's--prev': prevSlide === index,
            })}
            key={slide.city}
          >
            <div className="slider__slide-content">
              <h3 className="slider__slide-subheading">
                {slide.country || slide.city}
              </h3>
              <h2 className="slider__slide-heading">
                {slide.city.split('').map((l) => (
                  <span>{l}</span>
                ))}
              </h2>
              <p className="slider__slide-readmore">read more</p>
            </div>
            <div className="slider__slide-parts">
              {[
                ...Array(IMAGE_PARTS).fill(activeSlide, prevSlide, IMAGE_PARTS),
              ].map((x, i) => (
                <div className="slider__slide-part" key={i}>
                  <div
                    className="slider__slide-part-inner"
                    style={{ backgroundImage: `url(${slide.img})` }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="slider__control" onClick={() => changeSlides(-1)} />
      <div
        className="slider__control slider__control--right"
        onClick={() => changeSlides(1)}
      />
    </div>
  )
}

export default Carousel
