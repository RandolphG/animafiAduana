import React from 'react'
import { Link } from 'react-router-dom'

import RightArrow from '../../images/arrow-right.svg'

export default function Case({ image, alt, title, tag, slug }: any) {
  return (
    <>
      <Link to={`/${slug}`} className="work-card">
        <div className="thumb image-reveal" data-cta="case-study">
          <img src={image} alt={alt} />
        </div>

        <div className="card-content scroll-stagger">
          <div className="title">
            <h3>{title}</h3>
            <div className="arr">
              <img src={RightArrow} alt="arrow" />
            </div>
          </div>

          <span className="project-info">{tag}</span>
        </div>
      </Link>
    </>
  )
}
