import React, { useEffect } from 'react'
import gsap from 'gsap'
import '../../theme/_style.scss'
import { onLoadAnims } from '../../utils/onloadAnims'
import './styles/_heroStyles.scss'

export default function Hero() {
  useEffect(() => {
    // Onload animation
    const dribbble = document.querySelector('.floating-icons .dribbble span')
    const dribbbleIcon = document.querySelector('.floating-icons .dribbble img')
    const linkedin = document.querySelector('.floating-icons .linkedin span')
    const linkedinIcon = document.querySelector('.floating-icons .linkedin img')
    const gmail = document.querySelector('.floating-icons .gmail span')
    const gmailIcon = document.querySelector('.floating-icons .gmail img')

    /* eslint-disable */
    const tl = gsap.timeline()

    onLoadAnims(tl, true)

    tl.from(
      dribbble,
      {
        duration: 0.6,
        height: 0,
        width: 0,
        ease: 'elastic.out(1.25, 0.5)',
      },
      '-=0.7'
    )

    tl.from(
      dribbbleIcon,
      {
        duration: 0.3,
        opacity: 0,
      },
      '-=0.25'
    )

    tl.from(
      linkedin,
      {
        duration: 0.6,
        height: 0,
        width: 0,
        ease: 'elastic.out(1.25, 0.5)',
      },
      '-=0.35'
    )

    tl.from(
      linkedinIcon,
      {
        duration: 0.3,
        opacity: 0,
      },
      '-=0.25'
    )

    tl.from(
      gmail,
      {
        duration: 0.6,
        height: 0,
        width: 0,
        ease: 'elastic.out(1.25, 0.5)',
      },
      '-=0.35'
    )

    tl.from(
      gmailIcon,
      {
        duration: 0.3,
        opacity: 0,
      },
      '-=0.25'
    )
    /* eslint-enable */
  })

  useEffect(() => {
    const slides = document.querySelectorAll('.slide')
    const nextButton: any = document.getElementById('next')
    const prevButton: any = document.getElementById('prev')
    const auto = true
    const intervalTime = 5000
    let slideInterval: any

    const nextSlide = () => {
      const current: any = document.querySelector('.current')
      if (current && current.ClassList) {
        current.classList.remove('current')
        if (current.nextElementSibling) {
          current.nextElementSibling.classList.add('current')
        } else {
          slides[0].classList.add('current')
        }
      }
    }

    const prevSlide = () => {
      const current: any = document.querySelector('.current')
      current.classList.remove('current')
      if (current.previousElementSibling) {
        current.previousElementSibling.classList.add('current')
      } else {
        slides[slides.length - 1].classList.add('current')
      }
    }

    if (nextButton) {
      nextButton.addEventListener('click', () => {
        nextSlide()
        if (auto) {
          clearInterval(slideInterval)
          slideInterval = setInterval(nextSlide, intervalTime)
        }
      })
    }

    if (prevButton) {
      prevButton.addEventListener('click', () => {
        prevSlide()
        if (auto) {
          clearInterval(slideInterval)
          slideInterval = setInterval(nextSlide, intervalTime)
        }
      })
    }

    if (auto) {
      slideInterval = setInterval(nextSlide, intervalTime)
    }
  })

  const Slide = () => {
    ;[0, 1, 2, 3, 4, 5].map((images, idx) => (
      <div className="slide">
        <div className="content">
          <h1>TITLE HERE</h1>
          <p>Some text will go there about the images</p>
        </div>
      </div>
    ))
  }

  return (
    <div className="hero hero-1">
      <div className="wrapper">
        <div className="sliderContainer">
          <div className="slider">
            <div className="slide">
              <div className="content">
                <h1>TITLE HERE</h1>
                <p>Some text will go there about the images</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
