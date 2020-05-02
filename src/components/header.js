import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './Header.css'

const Header = ({ siteTitle }) => (
    <header className="Header">
        <div className="HeaderGroup">
            <Link to="/Gallery">GALLERY</Link>
            <Link to="/WallPaper">WALLPAPER</Link>
            <Link to="/Download">DOWNLOAD</Link>
            <Link to="/about">ABOUT</Link>
            <a href='https://github.com/wuyuandi' target="_blank"><button>Github</button></a>
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