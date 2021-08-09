import React from 'react'
// import { graphql, useStaticQuery } from 'gatsby'
// @ts-ignore
import PortableText from '@sanity/block-content-to-react'
import '../../theme/_style.scss'

export default function Favorites() {
  const data = {
    favorites: [{ title: '', desc: '' }],
  }

  const { favorites } = data

  return (
    <>
      <section className="favs two-col">
        <h2>
          <span className="line">
            <span className="line-inner">Title</span>
          </span>
          <span className="line">
            <span className="line-inner">Message</span>
          </span>
        </h2>

        <div className="content">
          <ul>
            {favorites.map((fav, i) => (
              <li key={i} className="text-reveal">
                <p className="que">{fav.title}</p>
                <PortableText
                  blocks={fav.desc}
                  serializers={{
                    types: {
                      block({ children }: any) {
                        return <p className="ans">{children}</p>
                      },
                    },
                    marks: {
                      link({ children, mark }: any) {
                        return (
                          <a href={mark.href} target="_blank" rel="noreferrer">
                            {children}
                          </a>
                        )
                      },
                    },
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
