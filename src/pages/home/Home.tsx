import React, { Fragment } from 'react'
import SEO from '../SEO'
import About from './About'
import Cases from './Cases'
import Hero from './Hero'
import MoreWorks from './MoreWorks'

const Home = () => {
  return (
    <Fragment>
      <SEO title="Home" />
      <Hero />
      <Cases />
      <About />
      <MoreWorks />
    </Fragment>
  )
}

export default Home
