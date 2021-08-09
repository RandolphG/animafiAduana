import React from 'react'
// import Img from 'gatsby-image'
// import { graphql, Link, useStaticQuery } from 'gatsby'
import '../../theme/_style.scss'
import { Link } from 'react-router-dom'

export default function Gallery() {
  const data = {
    img1: '',
    img2: '',
    img3: '',
    img4: '',
  }

  const { img1, img2, img3, img4 } = data

  return (
    <>
      <section className="gallery">
        <div className="images">
          <div className="img img-1" data-scroll="" data-scroll-speed="1">
            {/*<img fluid={img1} alt="more-design" />*/}
          </div>
          <div className="img img-2" data-scroll="" data-scroll-speed="2">
            {/*<Img fluid={img2} alt="more-design" />*/}
          </div>
          <div className="img img-3" data-scroll="" data-scroll-speed="1">
            {/*<Img fluid={img3} alt="more-design" />*/}
          </div>
          <div className="img img-4" data-scroll="" data-scroll-speed="4">
            {/*<Img fluid={img4} alt="more-design" />*/}
          </div>
        </div>

        <div className="buttons">
          {/* <Link to={{ pathname: '/', hash: '#works' }} className="button"> */}
          <div className="btn btn-1">
            <Link to="/#work" className="button">
              Case studies
            </Link>
          </div>
          <div className="btn btn-2">
            <Link to="/playground" className="button">
              Playground
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
