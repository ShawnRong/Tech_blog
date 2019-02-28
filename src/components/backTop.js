import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'

class BackTop extends React.Component {
  backToTop = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
  render() {
    return (
      <IconButton
        color="default"
        style={{ position: 'fixed', bottom: '10%', right: '10%' }}
        onClick={() => this.backToTop()}
      >
        <Icon style={{ height: 'auto' }}>arrow_upward</Icon>
      </IconButton>
    )
  }
}

export default BackTop
