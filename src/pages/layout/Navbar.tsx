import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// @ts-ignore
import { globalHistory } from '@reach/router'
import gsap from 'gsap'
import GhanaIcon from '../../images/ghana-cube.svg'
import MailIcon from '../../images/mail.svg'
import FlagIcon from '../../images/flag.svg'
import LogoIcon from './assets/LOGO_EMBLEM_OPTION_B.png'
import CountryIcon from '../../images/country.svg'
import '../../theme/_style.scss'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [disabled, setDisabled] = useState(false)

  // Determin if our menu-btn should be disabled
  const disabledMenu = () => {
    setDisabled(!disabled)
    setTimeout(() => {
      setDisabled(false)
    }, 1200)
  }

  function handleMenu() {
    disabledMenu()
    setMenuOpen(!menuOpen)

    if (!menuOpen) {
      /* eslint-disable */
      const tl = gsap.timeline()
      tl.to('.menu-bg', {
        duration: 0.6,
        visibility: 'visible',
        opacity: 1,
        height: '160vh',
        width: '160vh',
        ease: 'power3.inOut',
        stagger: 0.3,
      })
      tl.from(
        '.menu-items li',
        {
          duration: 1,
          y: 30,
          opacity: 0,
          ease: 'power3.out',
          stagger: 0.1,
        },
        '-=0.3'
      )
    } else {
      const tl = gsap.timeline()
      tl.to(['.menu-bg-2', '.menu-bg-1'], {
        duration: 0.6,
        opacity: 0,
        height: '50vh',
        width: '50vh',
        ease: 'power3.inOut',
        stagger: 0.15,
      })
      tl.to('.menu-bg', {
        duration: 0.1,
        visibility: 'hidden',
      })
      /* eslint-enable */
    }
  }

  // UseEffect for page changes
  useEffect(() => {
    if (menuOpen === true) {
      globalHistory.listen(() => {
        setMenuOpen(false)
        handleMenu()
      })
    }
  })

  return (
    <header>
      <nav className="navbar">
        <div className="wrapper">
          <Link to="/" className="logo">
            Home
          </Link>

          <ul className="main-menu">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/#">Donate</Link>
            </li>
            <li className="dropdown">
              <span className="menu-name">Connect</span>

              <div className="dropdown-menu">
                <a href="mailto:kbf@animafiaduana.com">
                  <img src={FlagIcon} alt="Gmail" />
                  <span>Financials</span>
                </a>
                <a href="/#" target="_blank" rel="noreferrer">
                  <img src={GhanaIcon} alt="Dribbble" />
                  <span>Heritage</span>
                </a>
                <a href="/#" target="_blank" rel="noreferrer">
                  <img src={CountryIcon} alt="Codepen" />
                  <span>Ancestry</span>
                </a>
                <a href="/#" target="_blank" rel="noreferrer">
                  <img src={MailIcon} alt="LinkedIn" />
                  <span>Contact</span>
                </a>
              </div>
            </li>
          </ul>

          <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
            <button
              className="menu-btn"
              onClick={handleMenu}
              disabled={disabled}
              type="button"
              aria-label="menu"
            >
              <span />
              <span />
            </button>

            <div className="menu-bg menu-bg-1" />
            <div className="menu-bg menu-bg-2" />

            <div className="menu-items">
              <ul>
                <li>
                  <Link to="/#">Home</Link>
                </li>
                <li>
                  <Link to="/#">Playground</Link>
                </li>
                <li>
                  <Link to="/#">About me</Link>
                </li>
                <li>
                  <div className="connect">
                    <a href="mailto:kbf@animafiaduana.com">
                      <img src={FlagIcon} alt="Gmail" />
                    </a>
                    <a href="/#" target="_blank" rel="noreferrer">
                      <img src={GhanaIcon} alt="Dribbble" />
                    </a>
                    <a href="/#" target="_blank" rel="noreferrer">
                      <img src={CountryIcon} alt="Codepen" />
                    </a>
                    <a href="/#" target="_blank" rel="noreferrer">
                      <img src={MailIcon} alt="LinkedIn" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
