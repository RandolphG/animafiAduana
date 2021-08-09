import React from 'react'
import { Helmet } from 'react-helmet'
// import { graphql, useStaticQuery } from 'gatsby'

/*const query = graphql`
  {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        siteUrl
        image
      }
    }
  }
`*/

export default function SEO({ location, title, description, custom }: any) {
  const site = {
    siteTitle: '',
    siteDesc: '',
    image: '',
  }
  const { siteTitle, siteDesc, image } = site

  return (
    <Helmet title={custom ? `${title} — ${custom}` : `${siteTitle} — ${title}`}>
      <html lang="en" />
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={image} />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="alternate icon" href="favicon.png" type="image/x-icon" />
      {/* Open Graph */}
      {location && <meta property="og:url" content={location.href} />}
      <meta property="og:image" content={image || '/favicon.svg'} />
      <meta property="og:title" content={siteTitle} key="ogtitle" />
      <meta property="og:site_name" content={title} key="ogsitename" />
      <meta
        property="og:description"
        content={description}
        key="ogdescription"
      />
      <meta name="msapplication-TileColor" content="#FBA754" />
      <meta name="theme-color" content="#FBA754" />
    </Helmet>
  )
}
