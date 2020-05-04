import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from 'react'
import './Header.css'



class Header extends Component {
	constructor(props) {
		super(props)
		this.state = {
	  		hasScrolled: false
		}
	  }
	render() {
		return (
			<header className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
				<div className="HeaderGroup">
				<Link to="/Gallery">GALLERY</Link>
				<Link to="/WallPaper">WALLPAPER</Link>
				<Link to="/Download">DOWNLOAD</Link>
				<Link to="/About">ABOUT</Link>
				<a href='https://github.com/wuyuandi' target="_blank" rel="noopener noreferrer"><button>Github</button></a>
			</div>

			</header>
		)
	}
	componentDidMount() {
		window.addEventListener('scroll',this.handleScroll)
	}
	componentWillUnmount() {
		window.removeEventListener('scroll',this.handleScroll)
	}
	handleScroll = (event) => {
		const scrollTop = window.pageYOffset

		if (scrollTop > 50 ) {
			this.setState({
				hasScrolled: true
			})
		} else {
			this.setState({
				hasScrolled: false
			})
		}
	}

	
}



Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header