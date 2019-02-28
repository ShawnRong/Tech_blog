import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Navigator from '../components/navigator'
import BackTop from '../components/backTop'
import favicon from '../static/favicon.png'

const Layout = ({ children }) => (
  <>
    <Helmet
      title={'日志 - Shawn'}
      meta={[
        { name: 'description', content: '日志 - Shawn' },
        { name: 'keywords', content: 'shawn, blog, blog-list' },
      ]}
    >
      <link rel="shortcut icon" type="image/png" href={favicon} />
    </Helmet>
    <Navigator to="/" label="首页" />
    <div
      style={{
        margin: '2rem auto',
        maxWidth: '80%',
      }}
    >
      { children }
      <BackTop />
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
