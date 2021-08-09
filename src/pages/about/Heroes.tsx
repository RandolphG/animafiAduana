import React from 'react'
import '../../theme/_style.scss'
// @ts-ignore
import RightArrow from '../../images/arrow-right.svg'

/*
*












Kwame B Fraimpong - Treasurer

Animafi Aduana Development Association. Inc. copyright © A tax exempt organization under section 501(C)(3)of the US IRS cod







*/

export default function Heroes() {
  const data = {
    heroes: [
      { id: 1, url: '/#', name: 'Efua Bonney', tag1: 'President', tag2: '' },
      {
        id: 2,
        url: '/#',
        name: 'Emmanuel Ofosu Ameyaw',
        tag1: '1st Vice President',
        tag2: '',
      },
      {
        id: 3,
        url: '/#',
        name: 'Prince Boateng',
        tag1: '2nd Vice President',
        tag2: '',
      },
      {
        id: 4,
        url: '/#',
        name: 'Kwame B Frimpong',
        tag1: 'Treasurer',
        tag2: '',
      },
      {
        id: 5,
        url: '/#',
        name: 'Rebecca Laumann',
        tag1: 'Secretary',
        tag2: '',
      },
      {
        id: 6,
        url: '/#',
        name: 'Juliana Acheampong',
        tag1: 'Officer',
        tag2: '',
      },
      {
        id: 7,
        url: '/#',
        name: 'Gerald Boateng',
        tag1: 'Officer',
        tag2: '',
      },
      {
        id: 8,
        url: '/#',
        name: 'Kwame Asiedu',
        tag1: 'Officer',
        tag2: '',
      },
      {
        id: 9,
        url: '/#',
        name: 'Florence Nyarkoa',
        tag1: 'Officer',
        tag2: '',
      },
    ],
  }

  const { heroes } = data
  return (
    <>
      <section className="gurus two-col">
        <h2>
          <span className="line">
            <span className="line-inner">BOARD OF </span>
          </span>
          <span className="line">
            <span className="line-inner">DIRECTORS</span>
          </span>
        </h2>

        <div className="content">
          <p className="para">Some message about the members of the board"</p>

          <div className="all-gurus">
            {heroes.map((hero) => (
              <a
                key={hero.id}
                href={hero.url}
                target="_blank"
                rel="noreferrer"
                className="guru scroll-stagger"
              >
                <div className="title">
                  <h4>{hero.name}</h4>
                  <div className="arr">
                    <img src={RightArrow} alt="arrow" />
                  </div>
                </div>

                <div className="tags">
                  <span>
                    {hero.tag1 === 'both' ? 'Design & dev' : hero.tag1}
                  </span>

                  {hero.tag2 && <span>{hero.tag2}</span>}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
