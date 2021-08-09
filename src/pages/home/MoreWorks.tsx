import React from 'react'
import { Link } from 'react-router-dom'
import Work from './Work'
import image00 from '../../images/worksImages/_image_01_600x400.jpg'
import image01 from '../../images/worksImages/_image_03_600x400.jpg'
import '../../theme/_style.scss'

export default function MoreWorks() {
  const data = {
    allWorks: [
      {
        image: image00,
        title: 'title01',
        url: '/#',
        tag: 'title01',
        hosted: 'title01',
        id: 'title01',
      },
      {
        image: image01,
        title: 'title01',
        url: '/#',
        tag: 'title01',
        hosted: 'title01',
        id: 'title01',
      },
    ],
  }

  const { allWorks } = data

  return (
    <>
      <section id="more-works">
        <div className="wrapper">
          <h2>
            <span className="line">
              <span className="line-inner">Our</span>
            </span>
            <span className="line">
              <span className="line-inner">Works</span>
            </span>
          </h2>

          <div className="content">
            <p className="para">
              The Animafi Aduana Development Association has a diverse range of
              backgrounds and skill sets, but we share a common passion for
              improving the life conditions of the underprivileged people.
            </p>

            <div className="all-works">
              {allWorks.map((work) => (
                <Work
                  img={work.image}
                  title={work.title}
                  url={work.url}
                  tag={work.tag}
                  hosted={work.hosted}
                  key={work.id}
                />
              ))}
            </div>

            <Link to="/#" className="button no-cursor">
              Mission
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
