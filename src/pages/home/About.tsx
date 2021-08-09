import React from 'react'
import { Link } from 'react-router-dom'
import image1 from '../../images/aboutImages/about-1.webp'
import image2 from '../../images/aboutImages/about-2.webp'
import image3 from '../../images/aboutImages/about-3.webp'
import '../../theme/_style.scss'

export default function About() {
  const data = {
    img1: image1,
    img2: image2,
    img3: image3,
  }

  const { img1, img2, img3 } = data

  return (
    <>
      <section id="about">
        <div className="wrapper">
          <div className="content">
            {/*<p className="big">
              The primary mission of our association is to help the
              rehabilitation and sustainable development of Animafi Aduana
              people of Obo Kwahu in Ghana.
            </p>*/}

            <Link to="/#" className="button no-cursor">
              More about us
            </Link>
          </div>

          {/*          <div className="images">
            <div className="img img-1" data-scroll data-scroll-speed="1">
              <img src={img1} alt="design" />
            </div>
            <div className="img img-2" data-scroll data-scroll-speed="2">
              <img src={img2} alt="design" />
            </div>
            <div className="img img-3" data-scroll data-scroll-speed="3">
              <img src={img3} alt="design" />
            </div>
          </div>*/}
        </div>
      </section>
    </>
  )
}
