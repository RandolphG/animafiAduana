import React from 'react'
import XDIcon from '../../images/footerImages/adobeXD.png'
import GatsbyIcon from '../../images/footerImages/gatsby.png'
import GsapIcon from '../../images/footerImages/gsap.png'
import SanityIcon from '../../images/footerImages/sanity.png'
import NetlifyIcon from '../../images/footerImages/netlify.png'

export default function Footer() {
  return (
    <>
      <footer>
        <div className="wrapper">
          <div className="cta">
            <h2>
              <span className="line">
                <span className="line-inner">Let's make a</span>
              </span>
              <span className="line">
                <span className="line-inner">difference</span>
              </span>
            </h2>

            <div className="content">
              <a
                href="mailto:kbf@animafiaduana.com"
                className="button no-cursor"
              >
                Write an Email
              </a>
            </div>
          </div>

          <div className="bottom">
            <p>Animafi Aduana Development Association. Inc. copyright ©</p>
            <p>
              A tax exempt organization under section 501(C)(3)of the US IRS
              code.
              {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
