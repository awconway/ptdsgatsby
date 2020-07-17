import { StaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

const Header = ({ data, siteTitle }) => (
  <header>
    <Link to="https://www.uhn.ca/PMCC">
      <Img fixed={data.pmcc.childImageSharp.fixed} />
    </Link>
    <h2 className="text-light">{siteTitle}</h2>

    <em className="text-light">Study overview</em>
  </header>
)

export default function myHeader(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          pmcc: file(relativePath: { eq: "pmcc_logo.png" }) {
            childImageSharp {
              fixed(width: 268, height: 51) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => <Header data={data} {...props} />}
    />
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
