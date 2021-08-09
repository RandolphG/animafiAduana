import React, { useEffect } from 'react'
import gsap from 'gsap'
import SEO from './SEO'
import { onLoadAnims } from '../utils/onloadAnims'
import Gallery from './about/Gallery'
import Tools from './about/Tools'
import Heroes from './about/Heroes'
import Favorites from './about/Favorites'
import '../theme/_style.scss'

export default function About() {
  useEffect(() => {
    const tl = gsap.timeline()
    onLoadAnims(tl, false, true)
  })

  return (
    <>
      <SEO title="About me" />

      <div className="hero hero-2">
        <div className="wrapper">
          <h1>
            <span className="line">
              <span className="line-inner">Animafi Aduana</span>
            </span>
          </h1>
          <h1>
            <span className="line">
              <span className="line-inner">Development Association</span>
            </span>
          </h1>
        </div>
      </div>

      <div className="about-content">
        <div className="wrapper">
          {/*          <section className="intro">
            <p className="big">Mission</p>
            <p className="para">
              The primary mission of our association is to help the
              rehabilitation and sustainable development of Animafi Aduana
              people of Obo Kwahu in Ghana. Therefore, we strive to fund and
              create innovative, collaborative solutions for the urgently needed
              services and restoration of facilities for the underprivileged
              people.
            </p>
            <p className="para">
              The Animafi Aduana Development Association has a diverse range of
              backgrounds and skill sets, but we share a common passion for
              improving the life conditions of the underprivileged people.
              Encouraging them to continue to live in their own communities. We
              work hard to accomplish our mission.
            </p>
            <p className="para">
              We believe a fearless approach is what is needed to address the
              objective at hand. Taking such an approach enables us to make
              transformational change. We believe real impact can be made when
              we rely on our strong foundation to guide our activities and
              collaborations as we work to uncover new, more impactful ways of
              addressing chronic social challenges.
            </p>
          </section>*/}

          {/*          <Gallery />*/}
          {/*<Heroes />*/}
          {/*<Tools />*/}
          {/*<Favorites />*/}
        </div>
      </div>
    </>
  )
}
