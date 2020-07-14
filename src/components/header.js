import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// import { Row, Col, Container } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header>
    <Link to="https://www.uhn.ca/PMCC">
      <img
        src="https://raw.githubusercontent.com/awconway/awconway.github.io/master/images/pmcc_logo.png"
        alt="PMCC logo"
      />
    </Link>
    <em className="text-light">Study overview</em>
    <h2 className="text-light">{siteTitle}</h2>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
