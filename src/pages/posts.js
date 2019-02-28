import React from 'react'
import { Link, graphql } from 'gatsby'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Layout from '../layouts/posts'

class Posts extends React.Component {
  constructor() {
    super()
    let postsToShow = 10
    this.state = {
      showingMore: false,
      postsToShow,
    }
  }
  update() {
    const total = this.props.data.allMarkdownRemark.edges.length
    const distanceToBottom =
      document.documentElement.offsetHeight -
      (window.scrollY + window.innerHeight)
    if (!(this.state.postsToShow > total) && distanceToBottom < 50) {
      this.setState({
        postsToShow: this.state.postsToShow + 5,
        showingMore: this.state.postsToShow < total,
      })
    }
    this.ticking = false
  }
  handleScroll = () => {
    if (!this.ticking) {
      this.ticking = true
      requestAnimationFrame(() => this.update())
    }
  }
  componentDidMount() {
    window.addEventListener(`scroll`, this.handleScroll)
    const total = this.props.data.allMarkdownRemark.edges.length
    this.setState({
      showingMore: this.state.postsToShow < total,
    })
  }

  componentWillUnmount() {
    window.removeEventListener(`scroll`, this.handleScroll)
  }
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    return (
      <Layout>
        <List style={this.props.transition && this.props.transition.style}>
          {posts.slice(0, this.state.postsToShow).map(({ node }) => (
            <Link to={'/posts' + node.fields.slug} key={node.id}>
              <ListItem button>
                <ListItemText
                  primary={node.frontmatter.title}
                  secondary={node.frontmatter.date}
                />
              </ListItem>
            </Link>
          ))}
          {this.state.showingMore && (
            <ListItem
              button
              onClick={() => {
                this.setState({
                  postsToShow: this.state.postsToShow + 5,
                  showingMore: this.state.postsToShow > posts.length,
                })
              }}
            >
              <ListItemText
                primary={'LoadMore...'}
                style={{ textAlign: 'center' }}
              />
            </ListItem>
          )}
        </List>
      </Layout>
    )
  }
}

export default Posts

export const query = graphql`
  query PostsListQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMM, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
