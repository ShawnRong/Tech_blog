import React from 'react'
import Link from 'gatsby-link'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
import Typography from '@material-ui/core/Typography'
import './navigator.css'

class Navigator extends React.Component {
  render() {
    return (
      <AppBar
        position="static"
        color="default"
        style={{ boxShadow: 'none', backgroundColor: '#fff' }}
      >
        <Toolbar>
          <Link to={this.props.to}>
            <IconButton>
              <Icon style={{ height: 'auto' }}>arrow_back</Icon>
            </IconButton>
          </Link>
          <Typography variant="title" color="inherit">
            {this.props.label}
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Navigator
