import React from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
import Case from './Case'
import '../../theme/_style.scss'
import image00 from '../../images/caseImages/_image_01_1200x900.webp'
import image01 from '../../images/caseImages/_image_00_1600x1200.webp'

export default function Cases() {
  const caseStudies: any[] = [
    {
      id: 'image00',
      mainImage: image00,
      title: 'title01',
      tag: 'title01',
      slug: '',
    },
    {
      id: 'image01',
      mainImage: image01,
      title: 'title02',
      tag: 'title02',
      slug: '',
    },
  ]

  return (
    <>
      <section id="work">
        <div className="wrapper">
          <h2>
            <span className="line">
              <span className="line-inner">Our history</span>
            </span>
          </h2>

          <div className="work-group work-group-1">
            {caseStudies.map((casestudy) => (
              <Case
                key={casestudy.id}
                image={casestudy.mainImage}
                alt={casestudy.mainImage}
                title={casestudy.title}
                tag={casestudy.tag}
                slug={casestudy.slug}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
