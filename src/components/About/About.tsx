import React, { useState } from 'react'
import { Document, Page } from 'react-pdf'

import './styles/_aboutStyles.scss'
// @ts-ignore
import ein from './assets/(EIN)_IRS_501_(c)_(3)_.pdf'
// @ts-ignore
import determinationLetter from './assets/(EIN)_IRS_IDENTIFICATION_DOCUMENT.pdf'
// @ts-ignore
import form99N from './assets/postcard_for_tax-exemption_(990-N)_2020.pdf'

const About = () => {
  const [show, setShow] = useState(false)
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onClick() {
    setShow(true)
  }

  function closeDocument() {
    setShow(false)
  }

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages)
  }

  function onDocumentLoadFailure({ error }: any) {
    console.log(error)
  }

  const directors = [
    { name: 'Efua Bonney' },
    { name: 'Emmanuel Ofosu Ameyaw' },
    { name: 'Prince Boateng' },
    { name: 'Kwame B. Frimpong' },
    { name: 'Juliana Acheampong' },
    { name: 'Gerald Boateng' },
    { name: 'Kwame Asiedu' },
    { name: 'Florence Nyarkoa' },
  ]

  const officers = [
    { name: 'Efua Bonney', title: 'President' },
    { name: 'Emmanuel Ofosu Ameyaw', title: '1st Vice President' },
    { name: 'Prince Boateng', title: '2nd Vice President' },
    { name: 'Rebecca Laumann', title: 'Secretary' },
    { name: 'Kwame B. Frimpong', title: 'Treasurer' },
  ]

  const MissionStatement = () => (
    <div className="missionStatement">
      <div className="missionStatement__title">MISSION STATEMENT</div>
      <div className="missionStatement__verbiageA">
        The primary mission of our association is to help the rehabilitation and
        sustainable development of Animafi Aduana people of Obo Kwahu in Ghana.
        Therefore, we strive to fund and create innovative, collaborative
        solutions for the urgently needed services and restoration of facilities
        for the underprivileged people.
      </div>

      <div className="missionStatement__verbiageB">
        The Animafi Aduana Development Association has a diverse range of
        backgrounds and skill sets, but we share a common passion for improving
        the life conditions of the underprivileged people. Encouraging them to
        continue to live in their own communities. We work hard to accomplish
        our mission.
      </div>

      <div className="missionStatement__verbiageC">
        We believe a fearless approach is what is needed to address the
        objectives at hand. Taking such an approach enables us to make
        transformative changes. We believe real impact can be made when we rely
        on our strong foundation to guide our activities and collaborations as
        we work to uncover new, more impactful ways of addressing chronic social
        challenges.
      </div>

      <div className="missionStatement__verbiageD">
        Animafi Aduana Development Association is a non-profit organization
        established in order to reconnect Animafi Aduana communities living
        abroad. As we grow as an organization we will strive to improve the life
        conditions of the Animafi Aduana people of Obo Kwahu Ghana.
      </div>
    </div>
  )

  return (
    <div className="aboutContainer">
      <div className="aboutContainer_content">
        <div className="aboutContainer_content_organization">
          <div className="type">ORGANIZATION</div>
          <div className="title">
            Animafi Aduana Development Association Inc.
          </div>
        </div>
        <div className="officialDocuments">
          <div className="officialDocuments__title">OFFICIAL DOCUMENTS</div>
          <div className="officialDocuments__subtitle">
            <div onClick={onClick}>
              <a className="documentLinks">
                EIN (Employment Identification Number)
              </a>
            </div>
            <div onClick={onClick}>
              <a className="documentLinks">501 (C)(3) Determination Letter</a>
            </div>
            <div onClick={onClick}>
              <a className="documentLinks">Tax Exempt Organizations Filings</a>
            </div>
          </div>
        </div>

        <MissionStatement />
        <div className="officials">
          <div className="officers">
            <div className="officers_title">OFFICERS</div>
            <ul className="officers_members">
              {officers.map((officers, idx) => (
                <li className="officers_members_member">
                  <div>{officers.name}</div>
                  <div>{officers.title}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className="boardOfDirectors">
            <div className="boardOfDirectors_title">BOARD OF DIRECTORS</div>
            <ul className="boardOfDirectors_members">
              {directors.map((director, idx) => (
                <li className="boardOfDirectors_members_member">
                  {director.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
