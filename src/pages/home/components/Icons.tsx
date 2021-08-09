import React from 'react'
import CountryIcon from '../../../images/country.svg'
import GhanaFlag from '../../../images/flag.svg'
import GhanaCubeIcon from '../../../images/ghana-cube.svg'

const Icons = () => (
  <div className="floating-icons">
    <a
      href="/#"
      target="_blank"
      rel="noreferrer"
      className="dribbble no-cursor"
    >
      <span>
        <img src={GhanaFlag} alt="dribbble" />
      </span>
    </a>
    <a
      href="/#"
      target="_blank"
      rel="noreferrer"
      className="linkedin no-cursor"
    >
      <span>
        <img src={CountryIcon} alt="country" />
      </span>
    </a>
    <a href="mailto:kbf@animafiaduana.com" className="gmail no-cursor">
      <span>
        <img src={GhanaCubeIcon} alt="gmail" />
      </span>
    </a>
  </div>
)

export default Icons
