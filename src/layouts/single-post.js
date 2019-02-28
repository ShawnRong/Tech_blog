import React from 'react'
import PropTypes from 'prop-types'
import Navigator from '../components/navigator'
import BackTop from '../components/backTop'

const Layout = ({ children }) => {
  return (
    <>
      <Navigator to="/posts" label="日志" />
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
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
