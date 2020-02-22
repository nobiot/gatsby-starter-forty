import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

const Header = (props) => {
  return (
    <header id='header' className='alt'>
      <Link to='/' className='logo'><img src='../images/emblem_white.png' width='50' /></Link>
      <nav>
        <a className='menu-link' onClick={props.onToggleMenu} href='#' />
      </nav>
      <Helmet>
        <script src='./js/observer.js' />
      </Helmet>
    </header>
  )
}

Header.propTypes = {
  onToggleMenu: PropTypes.func
}

export default Header
