import React from 'react'
import PropTypes from 'prop-types'
import Navigator from '../components/navigator'

const Layout = ({ children }) => {
  return (
    <div>
      <Navigator to="/posts" label="日志" />
      <div
        style={{
          margin: '2rem auto',
          maxWidth: '80%',
        }}
      >
        {children}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
