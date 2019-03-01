import React from 'react'
import { Link } from 'gatsby'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Layout from '../layouts/index'

// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Grid container>
      <Grid item xs={12}>
        <List>
          <ListItem>
            <ListItemText disableTypography>
              <h1>Shawn</h1>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <p>Web Developer</p>
            </ListItemText>
          </ListItem>
          <Link to="/posts">
            <ListItem button>
              <ListItemText primary="日志" secondary="/posts/" />
            </ListItem>
          </Link>
          <a href="https://www.github.com/shawnrong" target="_blank" rel="noopener noreferrer">
            <ListItem button>
              <ListItemText
                primary="GitHub"
                secondary="https://www.github.com/shawnrong"
              />
            </ListItem>
          </a>
          <ListItem button>
            <ListItemText primary="Mail" secondary="rongshawn@gmail.com" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Skype" secondary="live:shawn_rong" />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  </Layout>
)

export default IndexPage
