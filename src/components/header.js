import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './Header.css'

const Header = ({ siteTitle }) => (
    <header className="Header">
        <div className="HeaderGroup">
            <Link to="/Gallery">Gallery</Link>
            <Link to="/Description">Description</Link>
            <Link to="/WallPaper">WallPaper</Link>
            <Link to="/Download">Download</Link>
            <Link to="/support"><button>SUPPORT</button></Link>
        </div>

    </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header