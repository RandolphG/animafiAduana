import React from 'react'
import RightArrow from '../../images/arrow-right.svg'

export default function Work({ title, url, tag, hosted, img }: any) {
  return (
    <>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="work scroll-stagger img-cursor"
      >
        <div className="img">
          <img src={img} alt={title} />
        </div>

        <div className="work-content">
          <div className="title">
            <h3>{title}</h3>
            <div className="arr">
              <img src={RightArrow} alt="arrow" />
            </div>
          </div>
          <div className="tags">
            <span>{tag}</span>
            <span>{hosted}</span>
          </div>
        </div>
      </a>
    </>
  )
}
