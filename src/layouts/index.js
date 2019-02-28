import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import favicon from '../static/favicon.png'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: "Shawn's TimeCapsule" },
          { name: 'keywords', content: 'shawn, blog' },
        ]}
        >
        <link rel="shortcut icon" type="image/png" href={favicon} />
      </Helmet>
      <div
        style={{
          margin: '2rem auto',
          maxWidth: '80%',
        }}
      >
        {children}
      </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
