import { useStaticQuery, graphql, Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import Yoyo from "./yoyo";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Header() {
  const data = useStaticQuery(
    graphql`
        query {
          pmcc: file(relativePath: { eq: "pmcc_logo.png" }) {
            childImageSharp {
              fixed(width: 268, height: 51) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `
  )
  return (
    <header>
    <Link to="https://www.uhn.ca/PMCC">
      <Img fixed={data.pmcc.childImageSharp.fixed} />
    </Link>
    <h2 >Pre-procedure fasting and thirst discomfort</h2>
      <Yoyo>
          <FontAwesomeIcon
              icon={["fad", "chevron-double-down"]}
              size="2x"
          />
      </Yoyo>
  </header>
  )
}