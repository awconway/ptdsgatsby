import { StaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import Yoyo from "./yoyo";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Header = ({ data, siteTitle }) => (
  <header>
    <Link to="https://www.uhn.ca/PMCC">
      <Img fixed={data.pmcc.childImageSharp.fixed} />
    </Link>
    <h2 >{siteTitle}</h2>

      <p>Scroll down</p>

      <Yoyo>
          <FontAwesomeIcon
              icon={["fad", "chevron-double-down"]}
              size="2x"
          />
      </Yoyo>
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
