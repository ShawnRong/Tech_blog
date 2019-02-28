import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Navigator from '../components/navigator'

const Layout = ({ children }) => {
  return (
    <div>
      <Navigator to="/tags" label="所有标签" />
      <div
        style={{
          margin: '2rem auto',
          maxWidth: '80%',
        }}
      >
        { children }
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
